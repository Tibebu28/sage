#include <iostream>

using namespace std;

 void display(int x){
 	cout<<"int x"<<x<<endl;
 	
   	   }
		  
		  
 	void display(double y){
 		cout<<"double y"<<y<<endl;
	 }	  				
 
    void display(string s){
    	cout<<"string "<<s<<endl;
	}
 
 

int main (){
          
        display(1);
        display(1.56);
        display("selam");
          
          
	return 0;
}
