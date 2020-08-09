import { formatDistanceToNowStrict } from 'date-fns'

const utilFunctions = {

    parsedDate(date) {
        const year =  date.substr(0,4)
        const month = (date.substr(5,2))
        const day = date.substr(8,2)
        return formatDistanceToNowStrict(new Date(`${year},${month},${day}`))
    },

    findAccountTier(tier) {
        switch(tier){
            case 13:
                return 'Tier 1';
            case 14:
                return 'Tier 2';
            case 15:
                return 'Tier 3';
            default:
                return 'No Tier';
        }
    },

    findReadableSeniority(seniority) {
        switch(seniority){
            case executive:
                return 'Executive';
            case vice_president:
                return 'Vice President';
            case director:
                return 'Director';
            case individual_contributor:
                return 'Individual Contributor';
            default:
                return 'Seniority Unknown';
        }
    }

}

export default utilFunctions;