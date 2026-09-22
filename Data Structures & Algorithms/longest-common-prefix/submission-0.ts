class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {

        let matchCharacters:string = '';

        if(!strs.length) return matchCharacters;

        if(strs.length === 1) return strs[0];

        let matchString:string = strs[0];
        let setOfChars = '';
            for(let char of matchString){
                let i:number=1;
                let notMatched:boolean = false;
                setOfChars+=char;

                while(i<strs.length){
                    if(!strs[i].startsWith(setOfChars)){
                        notMatched = true;
                        break;
                    }
                    i++;
                }

                if(notMatched) break;
                else matchCharacters=setOfChars;
            }

        return matchCharacters;

    }

}
