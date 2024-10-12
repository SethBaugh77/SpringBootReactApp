package com.example.finance.demoFinance;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class UtilityCalculator implements ExpenseCalculator{

    @Override
    public double calculateExpense(double cost, double split) {

        return 20;
    }
    
}
