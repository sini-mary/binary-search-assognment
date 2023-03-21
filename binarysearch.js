function mergeSorts(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let mid = Math.floor(arr.length / 2);
    let left= arr.slice(0, mid);
    let right= arr.slice(mid);
  
    return merge(mergeSorts(left), mergeSorts(right));
  }
  
  function merge(left, right) {
    let result= [];
    let leftIndex=0;
    let rightIndex=0;
  
    while (leftIndex<left.length && rightIndex<right.length)  { if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
   } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    return result.concat(left.slice(leftIndex)).concat (right.slice(rightIndex)) ;
}
  
  function binarySearch(arr ,target) {
    let leftIndex = 0;
   let rightIndex = arr.length -1;
  
    while (leftIndex<=rightIndex) {
      const midIndex = Math.floor((leftIndex + rightIndex / 2));
      if (arr[midIndex] === target) {
        return midIndex;
    }
        else if (arr[midIndex] < target) { 
             leftIndex = midIndex + 1;
        } 
    else {
        rightIndex = midIndex - 1;
       
      }
    }
  
    return null;
  }
  
  const num = [45, 12,6 , 89, 2,5];
  const target = 6;
  
  const sortedArr = mergeSorts(num);
  const targetIndex =binarySearch(sortedArr, target);
  
  console.log(targetIndex);
  
  //Question 2
  function mergeSort(arr) {
    if(arr.length < 2) {
    return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
    }
    
    function merge(left, right) {
    let result = [];
    while(left.length && right.length) {
    if(left[0] > right[0]) {
    result.push(left.shift());
    } else {
    result.push(right.shift());
    }
    }
    return [...result, ...left, ...right];
    }
    
    let arr=[123,89,5,23,9,56];
    let sortedArrs = mergeSort(arr.reverse());
    console.log(sortedArrs);
    
    
    //question3
  
  function Sorts1(arrs1) {
    if (arrs1.length <= 1) {
      return arrs1;
    }
  
    let mid1 = Math.floor(arrs1.length/2);
    let left1= arrs.slice(0, mid1);
    let right1= arrs.slice(mid1);
  
    return merges1(Sorts1(left1), Sorts1(right1));
  }
  
  function merges1(left1, right1) {
    let result1= [];
    let leftIndices1=0;
    let rightIndices1=0;
  
    while (leftIndices1<left.length1 && rightIndices1<right.length1)  { 
        if (left1[leftIndices1] < right1[rightIndices1]) {
        result.push(left1[leftIndices1]);
        leftIndices1++;
   } else {
        result.push(right1[rightIndices1]);
        rightIndices1++;
      }
    }
    
    return result.concat(left1.slice(leftIndices1)).concat (right1.slice(rightIndices1)) ;
}

  
  function bSearch(arrs1,Target1) {
    let leftIndices1 = 0;
   let rightIndices1 = arrs1.length -1;
  
    while (leftIndices1<=rightIndices1) {
      const midIndex = Math.floor((leftIndices1 + rightIndices1 / 2));
      if (arrs1[midIndex] === Target) {
        return midIndex;
    }
        else if (arrs1[midIndex] < Target) { 
             leftIndex1 = midIndex + 1;
        } 
    else {
        rightIndex1 = midIndex - 1;
       
      }
    }
  
    return null;
  }
  
  const nu = [41,4,78,2,67,3];
  const Target = 34;
  
  const sortedArr2 = Sort(nu);
  const TargetIndex =bSearch(sortedArr2, Target);
  
  console.log(TargetIndex);
  
    
    

  


