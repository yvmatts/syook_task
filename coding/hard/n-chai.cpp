#include <iostream>

using namespace std;

int main()
{
    int g,b,n,k;

    cout<<"Enter value of n, k, g, b: ";
    cin>>n;
    cin>>k;
    cin>>g;
    cin>>b;

    char op[n];
    int lc = 0; //max_limiter
    int flag = 1;
    int limit = k; //selection_limiter
    int index = 0;

    if(g >= b) {
      while(g>0 && flag ==1) {
            if(k>=1) {
                k--;
                g--;
                lc++;
                op[index++] = 'G';
            }
            else{

                if(b == 0 && k == 0 && g <= limit){
                    if(lc + g > limit) {
                        cout<<"Not possible";
                        flag = 0;
                        break;
                    }
                    for(int i = index; i<n; i++) {
                        op[i] = 'G';
                        g--;
                        lc++;
                    }
                    break;
                }

                 else if(b > 0) {
                    k++;
                    b--;
                    op[index++] = 'B';
                    lc = 0;
                }
            }

        }
    } else {
        while(b>0 && flag ==1) {
            if(k>=1) {
                k--;
                b--;
                lc++;
                op[index++] = 'B';
            }
            else{

                if(g == 0 && k == 0 && b <= limit){
                    if(lc + b > limit) {
                        cout<<"Not possible";
                        flag = 0;
                        break;
                    }
                    for(int i = index; i<n; i++) {
                        op[i] = 'B';
                        b--;
                        lc++;
                    }
                    break;
                }

                 else if(b > 0) {
                    k++;
                    g--;
                    op[index++] = 'G';
                    lc = 0;
                }
            }

        }
    }

    if(flag) {
         for(int j = 0; j<n; j++) {
            cout<<op[j];
        }
    }

}
