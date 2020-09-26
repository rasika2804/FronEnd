import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public product = {};
  public productData = [
        {
            "prd_name": "Topware",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Bottomwear",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Footwear",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Ethinicwear",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Watches",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Personal Care",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Sports and Activewear",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Innerwear",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Sleepware",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Bags, Backpacks and Wallets",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Luggage and trolleys",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Other Accessories",
            "availibility": "yes",
            "category_name": "Men"
        },
        {
            "prd_name": "Ethenic and Fusionwear",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Westernwear",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Footwear",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Beauty and Personal Care",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Sleepwear",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Sports and Activewear",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Watches",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Jewellery",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Bags, Wallets and Clutches",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Luguagge and Trolleys",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Other Accessories",
            "availibility": "yes",
            "category_name": "Women"
        },
        {
            "prd_name": "Girls Clothing",
            "availibility": "yes",
            "category_name": "Kids"
        },
        {
            "prd_name": "Boys Clothing",
            "availibility": "yes",
            "category_name": "Kids"
        },
        {
            "prd_name": "Infants",
            "availibility": "yes",
            "category_name": "Kids"
        },
        {
            "prd_name": "Girls Footwear",
            "availibility": "yes",
            "category_name": "Kids"
        },
        {
            "prd_name": "Boys Footwear",
            "availibility": "yes",
            "category_name": "Kids"
        },
        {
            "prd_name": "Bags ans Accessories",
            "availibility": "yes",
            "category_name": "Kids"
        },
        {
            "prd_name": "Face Care",
            "availibility": "yes",
            "category_name": "Beauty And Personal Care"
        },
        {
            "prd_name": "Body Care",
            "availibility": "yes",
            "category_name": "Beauty And Personal Care"
        },
        {
            "prd_name": "Hair Care",
            "availibility": "yes",
            "category_name": "Beauty And Personal Care"
        },
        {
            "prd_name": "Storage and Organizer",
            "availibility": "yes",
            "category_name": "Home and Living"
        },
        {
            "prd_name": "Bed",
            "availibility": "yes",
            "category_name": "Home and Living"
        },
        {
            "prd_name": "Bath",
            "availibility": "yes",
            "category_name": "Home and Living"
        },
        {
            "prd_name": "Furnishing",
            "availibility": "yes",
            "category_name": "Home and Living"
        },
        {
            "prd_name": "Decor",
            "availibility": "yes",
            "category_name": "Home and Living"
        },
        {
            "prd_name": "Kitchen and Dining",
            "availibility": "yes",
            "category_name": "Home and Living"
        },
        {
            "prd_name": "Smart Wearables",
            "availibility": "yes",
            "category_name": "Gadgets"
        },
        {
            "prd_name": "Audio Hearables",
            "availibility": "yes",
            "category_name": "Gadgets"
        },
        {
            "prd_name": "Mobile Accessories",
            "availibility": "yes",
            "category_name": "Gadgets"
        }
    ]
  ngOnInit() {
  }

}
