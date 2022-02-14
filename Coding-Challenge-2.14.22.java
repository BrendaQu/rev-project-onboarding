    /* Create a function that takes the memory size (ms is a string type) as an argument and returns the actual memory size.

        Examples
        actualMemorySize("32GB") --> "29.76GB"

        actualMemorySize("2GB") --> "1.86GB"

        actualMemorySize("512MB") --> "476MB"

        Notes
        -The actual storage loss on a USB device is 7% of the overall memory size!
        -If the actual memory size was greater than 1 GB, round your result to two decimal places.
        -If the memory size after adjustment is smaller then 1 GB, return the result in MB.*/

    public static String actualMemorySize(String str){
        //convert string to string array
        String [] str_arr = str.split("");

        //get type, MB or GB
        String type = str_arr[str.length()-2] + str_arr[str.length()-1];

        //Convert string array to list
        ArrayList<String> strList = new ArrayList<String>(Arrays.asList(str_arr));

        //Remove type at end
        strList.remove(strList.size()-1);
        strList.remove(strList.size()-1);

        //get number from string and convert to double to do calculations
        StringBuilder str_num = new StringBuilder();
        for (String s : strList){
            str_num.append(s);
        }

        double num = Double.parseDouble(str_num.toString());

        //calculate result based on criteria
        StringBuilder result = new StringBuilder();
        if(type.equals("GB")) {
            double input = (num * 0.93);

            if (input >= 1) {
                result.append(String.format("%.2f", input));
                result.append("GB");
            } else {
                result.append(String.format("%.0f", input*1000));
                result.append("MB");
            }

        }
        else if(type.equals("MB")){
            result.append(String.format("%.0f", (num * 0.93)));
            result.append("MB");
        }

        return result.toString();
    }