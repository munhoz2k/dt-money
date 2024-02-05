import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateNewTransactionInputs {
  description: string
  type: string
  price: number
  category: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextType {
  transactions: TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateNewTransactionInputs) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const res = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(res.data)
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  const createTransaction = useCallback(
    async (data: CreateNewTransactionInputs) => {
      const res = await api.post('/transactions', {
        ...data,
        createdAt: new Date(),
      })

      setTransactions((state) => [res.data, ...state])
    },
    [],
  )

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
