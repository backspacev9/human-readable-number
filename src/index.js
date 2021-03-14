module.exports = function toReadable (number) {
    var list1 = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var list2 = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    var str = '';
    regex = ('000' + number).substr(-3).match(/^(\d{1})(\d{2})$/);
    if (number == 0){
        str = 'zero'
    }
    if (regex[1] != 0) {
      str +=  list1[Number(regex[1])] + 'hundred ';
    }
    if (list1[Number(regex[2])]){
      str += list1[Number(regex[2])];
    } else {
        str += list2[regex[2][0]] + ' ' + list1[regex[2][1]];
    }
 
    return str.trim();
}
