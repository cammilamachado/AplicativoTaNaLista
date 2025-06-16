import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NovaTask.css';

interface TaskForm {
  title: string;
  assignee: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
}

export default function NovaTask() {
  const navigate = useNavigate();
  const [form, setForm] = useState<TaskForm>({
    title: '',
    assignee: '',
    description: '',
    dueDate: '',
    priority: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.title.trim() || !form.assignee.trim()) {
      alert('Por favor, preencha pelo menos o título e responsável.');
      return;
    }

    // Here you would typically save the task to your state management or API
    console.log('Nova tarefa criada:', form);
    
    // Navigate back to cronograma
    navigate('/cronograma');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const updateForm = (field: keyof TaskForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="nova-task-page">
      <header className="page-header">
        <h1 className="page-title">Nova Tarefa</h1>
      </header>
      
      <main className="task-form-content">
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Título da Tarefa *</label>
            <input
              type="text"
              id="title"
              value={form.title}
              onChange={(e) => updateForm('title', e.target.value)}
              className="form-input"
              placeholder="Ex: Lavar louça"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="assignee" className="form-label">Responsável *</label>
            <select
              id="assignee"
              value={form.assignee}
              onChange={(e) => updateForm('assignee', e.target.value)}
              className="form-select"
              required
            >
              <option value="">Selecione o responsável</option>
              <option value="Samuel">Samuel</option>
              <option value="Gabriel">Gabriel</option>
              <option value="Miguel">Miguel</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Descrição</label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => updateForm('description', e.target.value)}
              className="form-textarea"
              placeholder="Detalhes adicionais sobre a tarefa..."
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate" className="form-label">Data de Vencimento</label>
            <input
              type="date"
              id="dueDate"
              value={form.dueDate}
              onChange={(e) => updateForm('dueDate', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Prioridade</label>
            <div className="priority-options">
              {(['low', 'medium', 'high'] as const).map(priority => (
                <label key={priority} className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value={priority}
                    checked={form.priority === priority}
                    onChange={(e) => updateForm('priority', e.target.value as any)}
                    className="priority-radio"
                  />
                  <span className={`priority-label priority-${priority}`}>
                    {priority === 'low' ? 'Baixa' : priority === 'medium' ? 'Média' : 'Alta'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <footer className="form-actions">
            <button type="button" onClick={handleCancel} className="cancel-button">
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              Criar Tarefa
            </button>
          </footer>
        </form>
      </main>
    </section>
  );
}
