import { useEffect, useState } from 'react'
import { Disclosure, Switch } from '@headlessui/react'
import { PlusIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Create from './Create'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ todoCards, setTodoCards }) {
    const [enabled, setEnabled] = useState(false)
    const [theme, setTheme] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const addCard = async (title, note) => {
        const newCard = {
            id: todoCards.length + 1,
            title: title,
            note: note,
        }

        await fetch("http://localhost:5050/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCard)
        }).catch(error => {
            window.alert(error)
            return
        })

        setTodoCards((prev) => [...prev, newCard])
        closeModal()
    }

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
       if (theme === 'dark') {
        document.documentElement.classList.add("dark")
       } else {
        document.documentElement.classList.remove("dark")
       }
    }, [theme])

    const toggleTheme = () => {
        let toggled = enabled
        setEnabled(!toggled) 
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
            <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <button
                        onClick={openModal}
                        className={`
                            ${open ? '' : 'text-opacity-90'}
                            group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                        <PlusIcon className='block h-6 w-6'/>
                    </button>
                    </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                    <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://img.icons8.com/?size=512&id=L9w6ndYjhwUY&format=png"
                        alt="Your Company"
                    />
                    <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://img.icons8.com/?size=512&id=L9w6ndYjhwUY&format=png"
                        alt="Your Company"
                    />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <div className='inline-flex items-center justify-center'>
                            <h1 className="text-white text-2xl">Things To Do</h1>
                        </div>
                        <div className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                            <button
                                onClick={openModal}
                                className={`
                                    ${open ? '' : 'text-opacity-90'}
                                    group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <PlusIcon className='block h-6 w-6'/>
                            </button>
                        </div>
                        {isOpen && <Create isOpen={isOpen} closeModal={closeModal} addCard={addCard} />}
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Switch
                        checked={enabled}
                        onChange={toggleTheme}
                        className={`${
                            enabled ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                        <span
                            className={`${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                    </Switch>
                    <p className="ml-2 px-2 text-white">{theme === 'dark' ? 'Dark' : 'Light'}</p>
                </div>
                </div>
            </div>
            </>
        )}
        </Disclosure>
    )
}
