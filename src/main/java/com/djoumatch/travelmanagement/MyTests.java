package com.djoumatch.travelmanagement;

import java.util.*;

public class MyTests {

    public static int[] removeDuplicate(int[] ints){
        Set<Integer> visited = new TreeSet<>();

        for (int i: ints){
            visited.add(i);
        }

        return visited.stream().mapToInt(i -> i).toArray();
    }

    public static boolean searchIn(int[] ints, int k){
        try {
            //float t = 1 / 0;
            String s = "tertet";
            s += "test";
            System.out.println(s);
        }catch (ArithmeticException e){
            System.out.println(e.getClass());
            System.out.println(e.getMessage());
        }catch (Exception e){

        }
        return Arrays.binarySearch(ints, k) >= 0;
    }

    public static void main(String[] args) {
        int[] input = {3,3,4,7,4,9,19,3};
        for (int i: removeDuplicate(input)){
            System.out.println(i);
        }
        System.out.println(removeDuplicate(input));

        Arrays.sort(input);
        System.out.println(searchIn(input, 1000));
    }

}
