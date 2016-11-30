//var arr = [7, 5, 4, 8, 9, 1, 3]
//var swap = 0
//var curr_min = arr[0]
//var temp =0
//var min_x =0
//
//console.log("Before sort " + arr)
//
//for( var i=1; i<arr.length-1; i++ ){
//    for(var x=i; x<arr.length-1; x++){
//        if(arr[x]<curr_min){
//            curr_min = arr[x]
//            min_x = x
//        }
//        temp = arr[swap] 
//        arr[swap] = arr[min_x]
//        arr[min_x]=
//        swap++
//    }
//}
//
//console.log("After sort " + arr)

function selSort(arr){
    for (var i=0; i<arr.length-1; i++){
        var min=i;
        for (var j=i+1; j<arr.length; j++){
            if (arr[j]<arr[min]){
                min=j;
            }
        }
        var temp = arr[i];
        arr[i]=arr[min];
        arr[min]= temp;
    }
    console.log(arr);
}
selSort([4,5,3,89,9]);