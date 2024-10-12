package com.example.finance.demoFinance;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class RentCalculator implements ExpenseCalculator{

    
    @Override
    public double calculateExpense(double rent, double split) {
        // TODO Auto-generated method stub
        return rent * split;
    }

    
}
