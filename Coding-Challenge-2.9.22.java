package com.company;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.lang.Integer.parseInt;

public class Main {

    //    Java:
    //  1) Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.
    //
    //    Examples
    //    ascending("232425") --> true
    //// Consecutive numbers 23, 24, 25
    //
    //    ascending("2324256") --> false
    //// No matter how this string is divided, the numbers are not consecutive.
    //
    //    ascending("444445") --> true
    //// Consecutive numbers 444 and 445.
    //    Notes
    //    A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
    //

    public static boolean ascending(String str){
        String[] str_arr = str.split("");
        ArrayList<Integer> list = new ArrayList<Integer>();

        for(int i = 0; i < str.length(); i++){
            int num = parseInt(str_arr[i]);
            list.add(num);
        }

        boolean flag = true;
        int add = 1;
        int i = 0;
        while(i < list.toArray().length) {
            if ((i + 1) < list.toArray().length) {
                if ((list.get(i) + 1) != list.get(i + 1)) {
                    add++;
                    int j = 0;
                    list.clear();
                    StringBuilder n_str = new StringBuilder();
                    if(str_arr.length % add == 0) {
                        while (j < str_arr.length) {
                            for (int k = 0; k < add; k++) {
                                n_str.append(str_arr[j]);
                                j++;
                            }
                            list.add(parseInt(n_str.toString()));
                            n_str.setLength(0);
                        }
                    }
                    i = -1;
                    flag = false;
                } else {
                    flag = true;
                }
            }
            i++;
        }
        return flag;
    }

    //2) Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.
    //
    //    Examples
    //    squarePatch(3) --> [
    //            [3, 3, 3],
    //            [3, 3, 3],
    //            [3, 3, 3]
    //            ]
    //
    //    squarePatch(5) --> [
    //            [5, 5, 5, 5, 5],
    //            [5, 5, 5, 5, 5],
    //            [5, 5, 5, 5, 5],
    //            [5, 5, 5, 5, 5],
    //            [5, 5, 5, 5, 5]
    //            ]
    //
    //    squarePatch(1) --> [
    //            [1]
    //            ]
    //
    //    squarePatch(0) --> []
    //    Notes
    //    n >= 0.
    //    If n = 0, return an empty array.

    public static void squarePatch(int n){
        int[][] array = new int[n][n];
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                array[i][j] = n;
            }
        }
        System.out.println('[');
        for (int i = 0; i < n; i++){
            if(i != n-1) {
                System.out.println(Arrays.toString(array[i]) + ',');
            }
            else {
                System.out.println(Arrays.toString(array[i]));
            }
        }
        System.out.println(']');

    }

    public static void main(String[] args) {
	// write your code here
        System.out.println(ascending("232425"));
        System.out.println(ascending("444445"));
        System.out.println(ascending("2324256"));
        System.out.println(ascending("232425678"));

        squarePatch(3);
        squarePatch(5);

    }
}