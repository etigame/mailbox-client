import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import EmailsListLayout from './layouts/EmailsListLayout'
import NewMessage from './components/NewMessage'
import EmailPage from './components/EmailPage'

export default function MainRouting() {
  return (
    <section>
      <Routes>
        <Route path="emails" element={<MainLayout />} >
          <Route path="newMessage" element={<NewMessage />} />
          <Route path=":emailsFilter" element={<EmailsListLayout />}>
            <Route path=":id" element={<EmailPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}
