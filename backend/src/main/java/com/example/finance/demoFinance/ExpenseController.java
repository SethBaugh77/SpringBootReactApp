package com.example.finance.demoFinance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ExpenseController {

@Autowired
private ExpenseCalculator rentCalculator;

@GetMapping("/calculate")
public ExpenseResponse  calculateSplits(@RequestParam (value = "rent", defaultValue = "0") double rent,
                              @RequestParam (value = "split1", defaultValue = "0") double split1,
                              @RequestParam (value = "split2", defaultValue = "0") double split2){

        

    String cost1 =  String.valueOf(rentCalculator.calculateExpense(rent, split1));
    String cost2 = String.valueOf(rentCalculator.calculateExpense(rent, split2));


    return new ExpenseResponse(cost1, cost2);
}

@GetMapping("/rent")
public String getRent(@RequestParam(value = "rent", defaultValue =  "0") String rent){
    return rent;
}

    
}
