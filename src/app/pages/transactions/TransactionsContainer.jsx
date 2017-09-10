import React from "react";
import Transactions from "./Transactions";
import axios from "axios";

const TransactionsContainer = () => {
  const categoriesApi = {
    client: axios,
    getUrl: () => {
      return "http://192.168.56.110/api/categories";
    }
  };
  const checkingAccountService = <CheckingAccountService.App categoriesApi={categoriesApi}/>;
  const className = CheckingAccountService.className;
  const menuOptions = CheckingAccountService.menuOptions;
  return <Transactions
    content={checkingAccountService}
    className={className}
    menuOptions={menuOptions}/>;
};

export default TransactionsContainer;
