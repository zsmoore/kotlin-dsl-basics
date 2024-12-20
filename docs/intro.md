---
sidebar_position: 1
---
# Kotlin Overview

## What is Kotlin?

Kotlin is a cross platform, statically typed, general-purpose high-level programming lanaguage with type inference.  

The language is fully interoperable with Java and (primarily) targets the JVM.  
Kotlin also has the ability to compile to Javascript as well as native code for integration with multiplatform use cases which share code between iOS and Android apps.

By default, Kotlin targets and produces Java 8 compatible [bytecode](https://en.wikipedia.org/wiki/Java_bytecode).  
This means that any system that is leveraging java 8 and higher is able to use Kotlin without any changes.

## Who Created Kotlin?

[JetBrains](https://kotlinlang.org/docs/faq.html#who-develops-kotlin)(creators of IntelliJ) developed Kotlin in 2011.

## Who Uses Kotlin?

At this point Kotlin is used by many companies including:
 - Google
 - Amazon
 - LinkedIn
 - Square
 - Pinterest
 - Doordash 

 etc.  The language has become very popular in recent years.  

 Notably, in [2017](https://android-developers.googleblog.com/2017/05/android-announces-support-for-kotlin.html) Google announced that Kotlin is an officially supported language for android development.  
 2 years later, in 2019 Google announced that Kotlin is now the preferred language for android development and that Android will be ['kotlin first'](https://developer.android.com/kotlin/first).  
 This meant documentation, libraries, training will be written with Kotlin in mind first with java support provided as a secondary. 

 ## Why Kotlin?

Kotlin is an expressive and concise language with rough estimates of approximately a 40% cut in lines of code compared to Java.  
The language also has built in nullability support at compile time, reducing the risk of null pointer exceptions.  
In comparison to languages like Java, Kotlin provides features such as
  - [Smart casting](https://kotlinlang.org/docs/typecasts.html#smart-casts)
  - [Higher order functions](https://kotlinlang.org/docs/lambdas.html)
  - [Extension functions](https://kotlinlang.org/docs/extensions.html)
  - [Type-safe builders](https://kotlinlang.org/docs/type-safe-builders.html)

All which provide more modern programming language styles while being fully interoperable with Java.  

### Why Does Java Interop Matter?

Whether you like it or not Java is a very powerful language due to the [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine).  
The JVM is what allows Java to be 'write once, run anywhere' meaning that programmers do not need to worry about the environment in which their program is running in.  
The JVM also provides us with
 - Common APIs to work with platform specific resources
 - Security due to the JVM middleman
 - Automatic memory management and garbage collection

For these various reasons, Java became a very popular language for development.  
However, until relatively recently the Java programming language suffered from a lack of evolution.  
Looking back at the historical releases of java we have
| Version | Release Date |
| ------- | ------------ |
| Java 6  | 12/11/06     |
| Java 7  | 7/28/11      |
| Java 8  | 3/18/14      |

Kotlin was created at a time where languages were evolving and Kotlin did not keep up.  

This is in stark contrast to modern Java release schedules 
| Version | Release Date |
| ------- | ------------ |
| Java 19  | 9/20/22     |
| Java 20  | 3/21/23     |
| Java 21  | 9/19/23     |

However, by the time Java started speeding up development, Kotlin was already created and had a strong community. [_interesting tech talk by Jake Wharton on the subject_](https://www.youtube.com/watch?v=te3OU9fxC8U)  
Beyond this, companies historically struggled to update to the latest java versions with notable jokes that many companies in 2024 are still on Java 7 or 8.  

Kotlin manages to bridge the gap here by first providing the ability to access modern features regardless of the java version you are targetting (remember Kotlin currently compiles to Java 8 bytecode by default).  
Second, since Kotlin is fully interoperable with Java, you are able to write Kotlin in an existing Java codebase without any full migration.  
You are also able to call Kotlin from Java and vice-versa, allowing your organization to choose what and when to write things in Kotlin vs Java.