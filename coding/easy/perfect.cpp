#include <iostream>

using namespace std;

int main(){
    int n,i=1,sum=0;
    cout << "Enter a number: ";
    cin >> n;
   while(i<n){
       if(n % i == 0)
       sum = sum + i;
       i++;
    }

    if(sum == n)
        cout << n << " is a perfect number\n";
    else if(sum > n)
        cout << n << " is an abundant number\n";
    else
        cout << n << " is an deficient number\n";



    return 0;
}
