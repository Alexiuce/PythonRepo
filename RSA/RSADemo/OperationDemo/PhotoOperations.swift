//
//  PhotoOperations.swift
//  OperationDemo
//
//  Created by alexiuce on 2019/10/28.
//  Copyright © 2019 alexiuce. All rights reserved.
//

import Foundation
import UIKit


enum PhoteRecordsState: Int {
    case new,download,filted,failed
}

class PhotoRecord{
    let name: String
    let url: URL
    var state = PhoteRecordsState.new
    var image = UIImage(named: "placeholder")
    
    init(name: String, url:URL) {
        self.name = name
        self.url = url
    }
}


class PendingOperations{
    lazy var downloadInProgress: [IndexPath : Operation] = [:]
    lazy var downloadQueue : OperationQueue = {
        var queue = OperationQueue()
        queue.name = "Download queue"
        queue.maxConcurrentOperationCount = 1
        return queue
    }()
    
    lazy var filtrationInProgress : [IndexPath : Operation] = [:]
    lazy var filtrationQueue: OperationQueue = {
        var queue = OperationQueue()
        queue.name = "Image filtration queue"
        queue.maxConcurrentOperationCount = 1
        return queue
    }()
}
