#include <iostream>

int main() {
  int num,count = 0,temp = 0,k= 2,j,temp2;
std::cout << "enter a number" << std::endl;
std::cin >> num;

for(int i = 2; i<num; i++){
if(num%i == 0){
  count++;

}
}
if(count>0){
  std::cout << " it is a not a prime number ";
  return 0;
}else{
int onceDigit = num%10;
std::cout<<"\nonceDigit is "<<onceDigit<<"\n";
  if(onceDigit == 9){
for(j = num+1;; j++){
  count = 0;
  // std::cout<<"\nnext number is"<<j<<"\n";
  for(int i = 2; i<j; i++){
if(j%i == 0){
  count++;
}
}
// std::cout<<"here count is"<<count;
if(count>0){
  //  std::cout << " it is a prime number\n";
}else if(count == 0){
  std::cout<<" next prime number is :"<<j<<"\n";
  temp2 = j;
  // std::cout<<"temp2 is :"<<temp2<<"\n";

  if(j%10==9){
  std::cout<<"\n it is a procupine since "<<j<<" does have a 9 in once place \n";
    
  std::cout<<"\nSo,"<<num<< " is a procupine number \n"<<num;
  break;
  }else{
    break;
  }
}

}
temp2 = j;
}
}
if(temp2%10!=9){
  std::cout<<"\n it is not a procupine since "<<j<<" does not have a 9 in once place \n";
}else{
  std::cout<<"\n So, it is a procupine number >>"<<num;
  
}
// std::cout<<"\ni am here temp2: "<< temp2<<"/n";
return 0;
}