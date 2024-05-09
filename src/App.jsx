import EmailsList from './components/EmailsList'
import EmailsNav from './components/EmailsNav'
import MainNav from './components/MainNav'
import { useState, useEffect } from 'react'
import emailsDB from './data/emails.json'
import DataContext from './context/DataContext'
import EmailPage from './components/EmailPage'

export default function App() {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    setEmails(emailsDB)
  }, [])

  return (
    <section className="app">
      <MainNav />
      <EmailsNav />
      <DataContext.Provider value={{emails}}>
        <EmailsList />
        <EmailPage />
      </DataContext.Provider>
    </section>
  )
}
