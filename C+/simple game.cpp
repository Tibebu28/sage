#include <iostream>

using namespace std;

int main(){
	
	int i;
	
	cout<<"             simeple game"<<endl<<endl<<endl;
	cout<<"imagine one number in your mind from 1 to 100."<<endl;
	cout<<"let the number say X "<<endl;
	cout<<"and write zero if you finish :";
	cin>>i;
	
		if(i==0){
			
			cout<<endl<<"know add 55 in that number(in X)"<<endl;
			cout<<"eg. 55 + X and write 55 :";
			cin>>i;
			
				if(i==55){
					
					cout<<endl<<"subtract 39 from the number you found above."<<endl;
					cout<<"eg. Y - 39 and write 39 :";
					cin>>i;
					
						if(i==39){
							
							cout<<endl<<"also add 5 to the number "<<endl;
							cout<<"eg. Z + 5 and write 5 :";
					        cin>>i;
					        
					        	if(i==5){
					        		
					        		cout<<endl<<"subtract your current number (say K) from the number you thought of in your mind(your first number)"<<endl;
					        		cout<<"eg. K - X know enter zero to know the answer :";
					        		cin>>i;
					        		
					        		if(i==0){
					        			cout<<endl<<endl<<"          ------- 21 --------"<<endl<<endl<<endl;
									}
									
									else{
										cout<<"write the correct number";
									}
							}
							
							else{
								cout<<"wirte correct mumber";
							}
							
						}
							
						else{
							cout<<"write correct number";
						}
				}
				
				else{
					cout<<"Enter correct number";
				}
			
		}
	   else{
	   	      cout<<"Enter correct number";
	   }
	   		
	
     
	return 0;
}