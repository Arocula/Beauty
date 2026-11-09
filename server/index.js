

const express = require('express');
const cors = require('cors');
const supabase = require('./supabase');

const app = express();

const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8', '9.9.9.9']);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Разрешаем запросы с фронтенда (React)
app.use(cors());
// Чтобы сервер понимал JSON
app.use(express.json());

// --- ТЕСТОВЫЙ МАРШРУТ ДЛЯ ПРОВЕРКИ БАЗЫ ---
app.get('/api/test-db', async (req, res) => {
  try {
    // Пытаемся запросить данные из таблицы services (услуги)
    // Если таблица есть и связь работает, ошибки не будет
    const { data, error } = await supabase
      .from('services')
      .select('*');

    if (error) throw error;

    res.json({
      status: "success",
      message: "✅ Подключение к базе данных Supabase работает отлично!",
      tablesConnected: true,
      recordsFound: data.length,
      data: data
    });
  } catch (err) {
    console.error("Ошибка подключения:", err);
    res.status(500).json({
      status: "error",
      message: "❌ Ошибка подключения к базе данных",
      details: err.message
    });
  }
});

app.post('/api/services', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .insert([req.body])
      .select();
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Обновить существующую услугу
app.put('/api/services/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .update(req.body)
      .eq('id', req.params.id)
      .select();
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Удалить услугу
app.delete('/api/services/:id', async (req, res) => {
  try {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', req.params.id);
    if (error) throw error;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;

app.get('/api/services', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('order', { ascending: true }); // Сортируем по полю order

    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Ошибка при получении услуг:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📡 Проверка базы: http://localhost:${PORT}/api/test-db`);
});