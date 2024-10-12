package com.example.finance.demoFinance;

public class ExpenseResponse {
    private String cost1;
    private String cost2;

    public ExpenseResponse(String cost1, String cost2) {
        this.cost1 = cost1;
        this.cost2 = cost2;
    }

    public String getCost1() {
        return cost1;
    }

    public void setCost1(String cost1) {
        this.cost1 = cost1;
    }

    public String getCost2() {
        return cost2;
    }

    public void setCost2(String cost2) {
        this.cost2 = cost2;
    }
}