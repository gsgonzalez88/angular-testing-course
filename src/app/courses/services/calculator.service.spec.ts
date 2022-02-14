import { LoggerService } from "./logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
    let loggerSpy: any;
    let calculator: CalculatorService;

    beforeEach(() => {
        
        console.log('calling beforeEach');
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        calculator = new CalculatorService(loggerSpy);
    });


    it('should add two numbers', () => {
        //arrange
        console.log('add');
        //act
        const result = calculator.add(2, 2);

        //assert
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {
        //arrange
        console.log('subtract')
        //act
        const result = calculator.subtract(2, 2);

        //assert
        expect(result).toBe(0, "unexpected subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
});