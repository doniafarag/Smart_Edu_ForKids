
import { catchError } from '../../utils/catchError.js'
import { letter } from '../../../database/models/letter.js'

const getEnglishLetters = catchError(async (req, res, next) => {
  const letters = await letter
    .aggregate([
      { $match: { language:"english", number: { $gte: 1, $lte: 26 } } },
      { $sample: { size: 4 } },
    ])
    
    return res.json({letters:letters})
});

const getArabicLetters = catchError(async (req, res, next) => {
  const letters = await letter
    .aggregate([
      { $match: { language:"arabic", number: { $gte: 1, $lte: 28 } } },
      { $sample: { size: 4 } },
    ])
    
    return res.json({letters:letters})
});

const getNumbers = catchError(async (req, res, next) => {
  const letters = await letter
    .aggregate([
      { $match: { language:"numbers", number: { $gte: 1, $lte: 20 } } },
      { $sample: { size: 4 } },
    ])
    
    return res.json({letters:letters})
});

export { getEnglishLetters,
  getArabicLetters,
  getNumbers
 };

