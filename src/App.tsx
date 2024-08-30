import React, { useState } from 'react';
import './App.css';
import { NewTextField } from '@npmtestliffi/learnstorybook-design-system-template';

function App() {
    const [options, setOptions] = useState([
        'Option 1',
        'Option 2'
    ]);
    const [newOption, setNewOption] = useState('');

    const handleAddOption = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newOption.trim() !== '') {
            setOptions([...options, newOption]);
            setNewOption('');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>This is the Parent MFE.</h1>
                <p>Here is the autocomplete component imported from the Storybook library:</p>

                {/* Container for side-by-side layout */}
                <div className="container">
                    {/* Left column: Autocomplete */}
                    <div className="column autocomplete-column">
                        <NewTextField
                            isAutoComplete
                            label="Option"
                            options={options}
                        />
                    </div>

                    {/* Right column: Option addition form */}
                    <div className="column option-form-column">
                        <form onSubmit={handleAddOption}>
                            <input
                                type="text"
                                value={newOption}
                                onChange={(e) => setNewOption(e.target.value)}
                            />
                            <button type="submit">Add</button>
                        </form>

                        {/* Display current options */}
                        <h3>Current options:</h3>
                        <ul>
                            {options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;
