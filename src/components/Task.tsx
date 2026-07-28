import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import type { Task } from './src/types';

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);