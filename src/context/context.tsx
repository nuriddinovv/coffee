// src/app/context/UserContext.jsx
import { createContext, useContext, useState, type ReactNode } from "react";

interface Seller {
  id: number | null;
  name: string;
}
interface UserContextType {
  seller: Seller;
  setSeller: (seller: Seller) => void;
}

// Context yaratamiz
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [seller, setSeller] = useState<Seller>({
    id: null,
    name: "",
  });

  return (
    <UserContext.Provider value={{ seller, setSeller }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useSeller = () => useContext(UserContext);
