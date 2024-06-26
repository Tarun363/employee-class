import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchKey: string, searchText: string): any[] {

    if (!items) return [];
    if (!searchText || searchText.length == 0) return items;

    return items.filter((item) => {
      return item[searchKey] && item[searchKey].toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
