//package com.ex.exercises;

import java.util.Arrays;

public class CamelCase {

    public static String camelCase(String word) {
        String[] w = word.split(" ");
        String ans = "";
        for(String i : w){
            String cap = i.substring(0, 1).toUpperCase() + i.substring(1);
            ans = ans + cap;
        }
        return ans;
    }

    public static void main(String[] args) {
        System.out.println(camelCase("hello case yah"));
    }
}