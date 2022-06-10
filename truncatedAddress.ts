const truncatedAddress = function(address:any){

        let first = address.substr(0,5);
        let last = address.substr(address.length - 5);
        let str = first+ '...' + last;
        return str;
    
}

class AdressTruncated{
    truncatedAddress() : string(){
        
    }
}