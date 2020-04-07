import { Component, OnInit, OnDestroy,AfterViewInit, ElementRef ,Input} from '@angular/core';
import { ViewChild } from '@angular/core';
import Sunburst from 'sunburst-chart';
import { ChatService } from '../../chart.services';
import { Router } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.css'],
  providers: [ChatService],
  encapsulation: ViewEncapsulation.None
})

export class SunburstComponent implements OnInit, OnDestroy,AfterViewInit {
  messages = [];
  connection;
  message;
 myChart;
 isShow= false;

 @ViewChild("chart", {static: false}) elementView: ElementRef;
  // constructor(private chatService: ChatService) { }
  constructor(private router: Router,private chatService: ChatService) { }

  ngOnInit() {
    
   
    this.isShow=true;
    this.connection = this.chatService.getLiveData1().subscribe(message => {
      console.log(message);
      this.messages.push(message);
      message["y"] = +message["y"];
      
    })
    this.chatService.getLiveData2().subscribe(sampleMessage => {
      console.log(sampleMessage);
      this.messages.push(sampleMessage);
      sampleMessage["y"] = +sampleMessage["y"];
   
    })

    this.chatService.sendMessage("sun_burst-123455");

    var data = {
      name:'Basemnet',
      color:'green',
     
      children: [
        {
          name: "Floor 1",
          color:'green',
          size: 1,
          children: [
            {
              name: "Cubilcle 1",
              color:'green',
              size: 100
            },
            {
              "name": "Cubilcle 2",
              color:'red',
              "size": 100
            },
            {
              "name": "Cubilcle 3",
              color:'yellow',
              "size": 100,
              children: [
                {
                  name: "Cubilcle 1",
                  color:'green',
                  size: 100
                },
                {
                  "name": "Cubilcle 2",
                  color:'red',
                  "size": 100
                },
                {
                  "name": "Cubilcle 3",
                  color:'yellow',
                  "size": 100,
                  children: [
                    {
                      name: "Cubilcle 1",
                      color:'green',
                      size: 100
                    },
                    {
                      "name": "Cubilcle 2",
                      color:'red',
                      "size": 100
                    },
                    {
                      "name": "Cubilcle 3",
                      color:'yellow',
                      "size": 100,
                      children: [
                        {
                          name: "Cubilcle 1",
                          color:'green',
                          size: 100
                        },
                        {
                          "name": "Cubilcle 2",
                          color:'red',
                          "size": 100
                        },
                        {
                          "name": "Cubilcle 23",
                          color:'yellow',
                          "uuid":"4567",
                          "size": 100
                        }]
                    }]
                }]

            }]
        },
        {
          "name": "Floor 2",
          color:'yellow',
          "size": 150
        },
        {
          "name": "Floor 10",
          "uuid":"1234",
          color:'yellow',
          "size": 150
        }
      ]
          
     
        };
  

       


       this.myChart = Sunburst();
      
       this.myChart.data(data)
      .size('size')
      .height(this.tooltip())
      .color('color')
      .showTooltip(false)
 // .tooltipTitle(d=>d.name)
     
        this.myChart.onHover(node => {
         
            // if(node.name===null){

            // }
            // else{
            //   console.log("onHover"+node.name+node.uuid);
            // }
         
  
      
          
        })




        // do other operations with node
       
 
     
      (document.getElementById('chart'));
  }

  ngAfterViewInit(){
 
   
      this.myChart.onNodeClick(node => {
        this.myChart.focusOnNode(node);
        
        setTimeout (() => {

          var x=node.uuid
         
          if(typeof x === 'undefined' || x === null ){
            console.log(" Null");
            this.router.navigateByUrl('navigation')
          }
          else{
            console.log("item"+ node.name);
            this.router.navigateByUrl('dash/'+x);
          }
           
     
        }, 1000);
        
      
        
      })

      



  }
  ngOnDestroy() {
    // this.connection.unsubscribe();
 
  }

  tooltip(){
   return 520;
  }

  navigator(){
    console.log("hello12345");
   }

   onSelectApp(){

    console.log("hello12345");
   }
}
