import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  @NgModule:
    コンポーネントのコンパイル方法、実行時にインジェクターを作成する方法が記述されたメタデータオブジェクトを引数に取る。
    モジュール自身がもつコンポーネント、ディレクティブやパイプを識別し、この中の幾つかを exports プロパティを介して公開し、
    外部コンポーネントから使用できるようにする。

  「モジュール」はアプリケーションを整理し、外部ライブラリの機能を使って拡張するための方法。
  FromsModule, HttpClientModule, RouterModule などの Angular ライブラリは NgModule であり、
  Ionic や AngularFire2 のようなサードパーティライブラリも NgModule として利用できる。

  NgModule はコンポーネント、ディレクティブやパイプを機能の密なブロックとしてまとめる。
  個々のモジュールはアプリケーションのビジネスドメイン、
  ワークフローや共通のユーティリティのコレクションなどの機能の領域に焦点が当てられている。
*/
