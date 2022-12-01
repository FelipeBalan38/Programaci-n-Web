import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resulPost = [];
    for(const post of value){
      if (post.posprobl.toLowerCase().indexOf(arg.toLowerCase())> -1){
        resulPost.push(post);
      };
    };
    return resulPost;
  }
}