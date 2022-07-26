#include <iostream>

using namespace std;
void creation(int t[],int n)
    {
    int i;
    for(i=1;i<n;i++)
    {
        cout<<"enter l'element",i,"du tableau";
        cin>>t[i];
    }
    }
    void affiche(int t[],int n)
    {
        int i;
        for(i=1;i<n;i++)
        {
            cout <<t[i]<<endl;
        }
    }
    void tri(int t[],int n)
    {
        int i,j,svg;
        for(i=1;i<n-1;i++)
        {
            for(j=i+1,i<n,j++)
            {
                if(t[i]>t[j])
                {
                    svg=t[i];
                    t[i]=t[j];
                    t[j]=svg;
                }
            }
        }
    }
    void menu()
    {
        const int n=10;
        int t[n],choix;
        do{
            cout <<"MENU"<<endl;
            cout<<"1-creation du tableau"<<endl;
            cout<<"2-Affichage du tableau"<<endl;
            cout<<"3-trie du tableau "<<endl;
            cout<<"4-quitter"<<endl;
            cout<<"Faite votre choix ";
            cin>>choix;
            switch(choix)
            {
                case 1:creation(t)
            }
    }
int main()
{
    cout << "Hello world!" << endl;
    return 0;
}
