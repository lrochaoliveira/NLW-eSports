import { Check, GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useState, useEffect } from 'react';

import { Input } from '../components/Form/Input';

interface Game {
    id: string;
    title: string;
}

export function CreateAdModal(){

    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
      fetch('http://localhost:3333/games')
        .then(reponse => reponse.json())
        .then(data => {
          setGames(data)
        })
    }, [])

    return(
        <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset=0 fixed" />

        <Dialog.Content className='fixed bg-{#2A2634} py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
        
            <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <select 
                    id="game" 
                    className ="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                >
                    <option disabled selected value="">Selecione o game que deseja jogar</option>
                    { games.map(game =>{
                        return <option key={game.id} value={game.id}>{game.title}</option>
                    })}
                </select>
                </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id="name" placeholder="Como te chamam dentro do game?" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual o seu Discord?</label>
                    <Input id="discord" type="number" placeholder="Usuario#0000" />
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>

                    <div className='grid grid-cols-4 gap-2'>
                    <button 
                        title="Domingo" 
                        className="w-8 h-8 rounded bg-zinc-900"
                        >
                        D
                    </button>

                    <button 
                        title="Segunda" 
                        className="w-8 h-8 rounded bg-zinc-900"
                        >
                        S
                    </button>

                    <button 
                        title="Terça" 
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        T 
                    </button>

                    <button 
                        title="Quarta"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        Q
                    </button>

                    <button 
                        title="Quinta"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        Q
                    </button>

                    <button 
                        title="Sexta"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        S
                    </button>

                    <button 
                        title="Sábado"
                        className="w-8 h-8 rounded bg-zinc-900"
                    >
                        S
                    </button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className="flex flex-col gap-2">
                    <Input id="hourStart" type="time" placeholder="De"  />
                    <Input id="hourEnd" type="time" placeholder="De"  />
                    </div>
                </div>
                </div>

                <div className="mt-2 itens-center flex gap-2 text-sm">
                <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
                    <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-enerald-400" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                Costumo me conectar ao chat de vozWS
                </div>
                
                <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close 
                    type="button"
                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                    Cancelar
                </Dialog.Close>
                <button 
                    type="submit"
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                    <GameController className="w-6 h-6 "/>
                    Encontrar duo
                </button>
                </footer>
            </form>
        </Dialog.Content>

    </Dialog.Portal>
    )
}