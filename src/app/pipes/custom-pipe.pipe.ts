import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exponentialStrength'})
export class CustomPipePipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    const exp: number = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}