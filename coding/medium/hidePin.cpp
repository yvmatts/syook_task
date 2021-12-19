#include <iostream>
#include <math.h>
using namespace std;

void hidePin(int a[], int n) {
    cout<<" ";
    string pin[n];
    int rev = 0;
    int i = 0;
    for(i = 0; i< n ; i ++) {
        if(a[i]) {
            switch(a[i]) {
                case 1:
                    pin[i] = "pop";
                    break;
                case 10:
                    pin[i] = "double rip";
                    break;
                case 100:
                    pin[i] = "hide your mints";
                    break;
                case 1000:
                    pin[i] = "fall";
                    break;
                case 10000:
                    rev = !rev;
                    break;
            }
        }
    }
    if(rev) {
        for(int j = i; j>=0; j--) {
            cout<<pin[j]<<"\n";
        }
    } else {
        for(int j = 0; j<n; j++) {
            cout<<pin[j]<<"\n";
        }
    }
}

void decToBinary(int n)
{
    int binaryNum[32];
    int i = 0;
    while (n > 0) {

        binaryNum[i] = n % 2;
        n = n / 2;
        i++;
    }
    int breakup[i];

    for (int j = i - 1; j >= 0; j--) {
        breakup[j] = binaryNum[j] * pow(10,j);
    }
    hidePin(breakup, i);

}

int main()
{
    int n;
    cout<<"Enter no: ";
    cin>>n;
    decToBinary(n);
    return 0;
}
