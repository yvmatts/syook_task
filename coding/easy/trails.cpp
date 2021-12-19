#include <iostream>

using namespace std;

int main(){
    int n;
    int count = 0;
    cout << "Enter a number: ";
    cin >> n;
    while(n >1) {
        if(n%2 == 0) {
            n = n/2;
            count++;
        } else {
            n = 3*n +1;
            count++;
        }

    }
    cout<<"Steps:"<<count;




    return 0;
}
