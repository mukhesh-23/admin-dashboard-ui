import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import StatCards from "./components/StatCard/StatCard"
import PaymentTransactions from "./components/PaymentTransactions/PaymentTransactions"
import TransactionsTable from "./components/TransactionsTable/TransactionsTable"
import ActivityTimeline from "./components/ActivityTimeline/ActivityTimeline"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-6 overflow-y-auto space-y-6">

          {/* Stat Cards */}
          <StatCards />

          {/* Transactions + Table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PaymentTransactions />
            <TransactionsTable />
          </div>

          {/* Activity Timeline */}
          <ActivityTimeline />

        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
