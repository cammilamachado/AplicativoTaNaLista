import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/Layout/MobileLayout';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { usePoll } from '../context/PollContext';
import './CreatePollPage.css';

const CreatePollPage: React.FC = () => {
  const navigate = useNavigate();
  const { createPoll } = usePoll();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const pollOptions = options
      .filter(option => option.trim())
      .map((option, index) => ({
        id: (index + 1).toString(),
        text: option.trim(),
        votes: 0
      }));

    if (pollOptions.length < 2) {
      alert('É necessário pelo menos 2 opções válidas');
      return;
    }

    createPoll({
      title,
      description,
      startDate,
      endDate,
      options: pollOptions
    });

    navigate('/voting');
  };

  return (
    <MobileLayout>
      <div className="create-poll-page">
        <header className="page-header">
          <button 
            className="back-button"
            onClick={() => navigate('/voting')}
            aria-label="Voltar"
          >
            ←
          </button>
          <h1>Criar Votação</h1>
        </header>

        <form onSubmit={handleSubmit} className="poll-form">
          <Input
            label="Título da Votação"
            value={title}
            onChange={setTitle}
            placeholder="Digite o título"
            required
          />

          <Input
            label="Descrição"
            value={description}
            onChange={setDescription}
            placeholder="Breve descrição da votação"
            required
          />

          <Input
            label="Data de Início"
            type="date"
            value={startDate}
            onChange={setStartDate}
            required
          />

          <Input
            label="Data de Fim"
            type="date"
            value={endDate}
            onChange={setEndDate}
            required
          />

          <div className="options-section">
            <h3>Opções de Votação</h3>
            {options.map((option, index) => (
              <div key={index} className="option-input-group">
                <Input
                  label={`Opção ${index + 1}`}
                  value={option}
                  onChange={(value) => handleOptionChange(index, value)}
                  placeholder={`Digite a opção ${index + 1}`}
                  required={index < 2}
                />
                {options.length > 2 && (
                  <button
                    type="button"
                    className="remove-option-btn"
                    onClick={() => handleRemoveOption(index)}
                    aria-label={`Remover opção ${index + 1}`}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            
            <Button
              type="button"
              variant="outline"
              onClick={handleAddOption}
            >
              Adicionar Opção
            </Button>
          </div>

          <div className="form-actions">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/voting')}
            >
              Cancelar
            </Button>
            <Button type="submit">
              Criar Votação
            </Button>
          </div>
        </form>
      </div>
    </MobileLayout>
  );
};

export default CreatePollPage;
