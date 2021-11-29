---
date: 02-07-21
id: 1
path: ''
tags:
- combine git repo
title: How to combine two git repositories. · GitHub
type: bookmark
url: https://gist.github.com/msrose/2feacb303035d11d2d05
---

Skip to content

[ Sign in ](https://gist.github.com/auth/github?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05) [ Sign up ](https://gist.github.com/join?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05&source=header-gist)

{{ message }}

Instantly share code, notes, and snippets. 

#  [msrose](https://gist.github.com/msrose)/ **[combining-git-repositories.md](https://gist.github.com/msrose/2feacb303035d11d2d05)**

Last active Feb 4, 2021

  * [ 189 ](https://gist.github.com/msrose/2feacb303035d11d2d05/stargazers)
  * [ 37 ](https://gist.github.com/msrose/2feacb303035d11d2d05/forks)



Embed

What would you like to do?

Embed  Embed this gist in your website. 

Share  Copy sharable link for this gist. 

Clone via HTTPS  Clone with Git or checkout with SVN using the repository’s web address. 

[Download ZIP](https://gist.github.com/msrose/2feacb303035d11d2d05/archive/ec2df87b202ec28abcbd54c2ae2a6e53e4ece052.zip)

How to combine two git repositories. 

[Raw](https://gist.github.com/msrose/2feacb303035d11d2d05/raw/ec2df87b202ec28abcbd54c2ae2a6e53e4ece052/combining-git-repositories.md)

# Combining two git repositories

**Use case** : You have repository A with remote location rA, and repository B (which may or may not have remote location rB). You want to do one of two things:

  * preserve all commits of both repositories, but replace everything from A with the contents of B, and use rA as your remote location
  * actually combine the two repositories, as if they are two branches that you want to merge, using rA as the remote location



**NB** : Check out `git subtree`/`git submodule` and [this Stack Overflow question](http://stackoverflow.com/questions/1425892/how-do-you-merge-two-git-repositories) before going through the steps below. This gist is just a record of how I solved this problem on my own one day.

Before starting, make sure your local and remote repositories are up-to-date with all changes you need. The following steps use the general idea of changing the remote origin and renaming the local master branch of one of the repos in order to combine the two master branches.

Change the remote origin of B to that of A:
    
    
    $ cd path/to/B
    $ git remote rm origin
    $ git remote add origin url_to_rA
    

Rename the local master branch of B:
    
    
    $ git checkout master
    $ git branch -m master-holder
    

Pull all the code of A from rA into your local B repo.
    
    
    $ git fetch
    $ git checkout master
    $ git pull origin master
    

Now the master branch of A is _master_ in B. The old master of B is _master-holder_.

Delete all the things! (i.e, scrap everything from A.) If you actually want to _merge_ both repos, this step is unnecessary.
    
    
    $ git rm -rf *
    $ git commit -m "Delete all the things."
    

Merge _master-holder_ into _master_. (If you didn't do the delete step above, you have to option of `git checkout master-holder; git rebase master` instead.) For more recent versions of git, you'll probably have to add the `--allow-unrelated-histories` flag (thanks to @sadzik).
    
    
    git merge master-holder --allow-unrelated-histories
    

`git log` should show all the commits from A, the delete commit, the merge commit, and finally all the commits from B.

Push everything to rA
    
    
    git push origin master
    

Now your local copy of B has become a "unified" repository, which includes all the commits from A and B. rA is used as the remote repo. You no longer need your local copy of A or the remote repo rB (although keeping rB around for a bit longer isn't a bad idea).

###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[sadzik](https://gist.github.com/sadzik) ** commented Nov 9, 2017

Thank You msrose for great tutorial!  
One remark. In my case, when running  
`git merge master-holder`  
it was necessary to add  
`--allow-unrelated-histories`  
so the final command looks like this:  
`git merge master-holder --allow-unrelated-histories`  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[vhquang](https://gist.github.com/vhquang) ** commented Jan 21, 2018

Thank you [@msrose](https://github.com/msrose) and [@sadzik](https://github.com/sadzik) for sharing your steps on doing this. It greatly helps me for the exact problem!  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[untmdsprt](https://gist.github.com/untmdsprt) ** commented Jan 22, 2018 •

edited 

Hi, would this also work for someone like me who is taking classes on Udemy and would like to keep everything organized under one heading?

What I would like to do is have the following:
    
    
                                     Udemy
                                   /           \
                                 /               \
                               /                   \
                         Class 1             Class 2
                         /      \                /     \
                       P1      P2           P1     P2
    

and so forth. Is this possible and still be able to keep each project separate from the others?  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[iansowinski](https://gist.github.com/iansowinski) ** commented Mar 20, 2018

Thank you, [@msrose](https://github.com/msrose) you saved my life!  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[bibijke](https://gist.github.com/bibijke) ** commented Jul 9, 2018

Nice post [@msrose](https://github.com/msrose), saved a lot of time :)  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[jmarshall9120](https://gist.github.com/jmarshall9120) ** commented Nov 12, 2018

This doesn't work for me. git merge master-holder --allow-unrelated-histories just ends with "your branch is up to date with origin master", even though clearly my repo is still empty. I think this maybe because they shared a history at one time.  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[StevenBegin](https://gist.github.com/StevenBegin) ** commented May 3, 2019

Any way to do this in GitHub desktop? It doesn't seem to talk about "remote" repos.  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[Korporal](https://gist.github.com/Korporal) ** commented May 27, 2019

[@msrose](https://github.com/msrose) \- How would you solve this problem when each repo has many branches? For example see this question I asked recently:

<https://github.community/t5/How-to-use-Git-and-GitHub/Combining-repositories/td-p/24351>

Thanks  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

Owner  Author 

###  **[msrose](https://gist.github.com/msrose) ** commented May 27, 2019

[@Korporal](https://github.com/Korporal) I haven't looked at the example you linked in depth but you could do it by the same method, adding the remote repo as a remote to both local repos and pushing all the branches from both. You would have to be aware of any duplicate branch names across both repos and resolve them accordingly, as in the example above with the master branch.  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[kslong](https://gist.github.com/kslong) ** commented Nov 1, 2019

This worked fine for me and once the two repositories were merged, I could see the commit history of everything. However, it did not solve my use case.

I have two repositories which were developed in parallel for a substantial period of time, one which mainly held code and the other which mainly held data. We had by hand kept these in sync.

What I was hoping was that when I merged the data repository into the code repository, is that I when I checked out an older version of the combined repository, that I would have both the data and the source at the same point in time. When I did this however, I ended up with the code, but not the data.

Any thoughts about that [@msrose](https://github.com/msrose)  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[IssacSiteDude52](https://gist.github.com/IssacSiteDude52) ** commented Nov 7, 2019

It will not let me merge the respetories  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

Owner  Author 

###  **[msrose](https://gist.github.com/msrose) ** commented Nov 9, 2019

[@kslong](https://github.com/kslong) Off the top of my head I'm not sure how to solve your use case, it sounds like you want to maintain the two histories in parallel which I don't think is possible in a single repo. One option might be to go through the code repo and amend each commit with the data from the data repo, but that will change all the hashes and effectively end up with a brand new repo. I recently learned about [git worktree](https://spin.atomicobject.com/2016/06/26/parallelize-development-git-worktrees/) which sounds really cool and might help your use case, but I have no experience with it to guide you in the right direction so I might be spouting nonsense. Worth a look though, there always seems to be a way in git.  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[kslong](https://gist.github.com/kslong) ** commented Nov 9, 2019 •

edited 

Not quite. What I wanted to do is to combine two repositories that had been created in parallel to create a new repository (which I would used going forward, and I wanted it to look like the following, where the first two lines how the history of the two repositories:
    
    
    ***x*******x*********x
    *y****y******y**********y
    --> a combined repository
    *y*x**y****x*y*******x**Y
    

But I wanted to then be able to checkout, say the commt that appears at
    
    
    *y*x**y  
    

in the combined repository, and have this reflect what had been in the first repository at
    
    
    ***x, 
    

and the second one at
    
    
    *y****y.
    

This did not happen, when I tried the script.  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

Owner  Author 

###  **[msrose](https://gist.github.com/msrose) ** commented Nov 9, 2019

I think it's got to do with how git handles merging unrelated histories. Here's a test I ran with two simple repos:
    
    
    A1---A2---
    --B1---B2
    

Which when merged as described become:
    
    
    A1--B1--A2--B2
    

**EXAMPLE COMMANDS TO GENERATE THIS REPO STATE** $ mkdir a $ mkdir b $ cd a $ git init Initialized empty Git repository in /Users/michael/Documents/test-stuff/test-repo-merge/a/.git/ $ echo data > file1 $ cat file1 data $ git add . $ git commit -m "First commit A" [master (root-commit) 49021aa] First commit A 1 file changed, 1 insertion(+) create mode 100644 file1 $ cd ../b/ $ git init Initialized empty Git repository in /Users/michael/Documents/test-stuff/test-repo-merge/b/.git/ $ echo data > file2 $ git add . $ git commit -m "First commit B" [master (root-commit) 772ec4a] First commit B 1 file changed, 1 insertion(+) create mode 100644 file2 $ cd ../a/ $ echo data > file3 $ git add . $ git commit -m "Second commit A" [master 2ffa2bd] Second commit A 1 file changed, 1 insertion(+) create mode 100644 file3 $ cd ../b/ $ echo data > file4 $ git add . $ git commit -m "Second commit B" [master eab377d] Second commit B 1 file changed, 1 insertion(+) create mode 100644 file4 $ git remote add other ../a $ git fetch other warning: no common commits remote: Enumerating objects: 5, done. remote: Counting objects: 100% (5/5), done. remote: Compressing objects: 100% (3/3), done. remote: Total 5 (delta 0), reused 0 (delta 0) Unpacking objects: 100% (5/5), done. From ../a * [new branch] master -> other/master $ git merge other/master fatal: refusing to merge unrelated histories $ git merge other/master --allow-unrelated-histories Merge made by the 'recursive' strategy. file1 | 1 + file3 | 1 + 2 files changed, 2 insertions(+) create mode 100644 file1 create mode 100644 file3 $ git log --pretty=oneline d15171726f4678556680648d9911cfba8daf3fba (HEAD -> master) Merge remote-tracking branch 'other/master' eab377dbf9e00c20244d7f73e387d8b353d3f730 Second commit B 2ffa2bdc459392c10e0a286173bb9dd33cdb930e (other/master) Second commit A 772ec4a01176c68e6e5e9013f60dd17462acb394 First commit B 49021aa931f7583db4421e08b14b067e10bea7f3 First commit A $ git checkout 49021aa931f7583db4421e08b14b067e10bea7f3 HEAD is now at 49021aa First commit A $ ls file1 $ git checkout 772ec4a01176c68e6e5e9013f60dd17462acb394 Previous HEAD position was 49021aa First commit A HEAD is now at 772ec4a First commit B $ ls file2 $ git checkout master Previous HEAD position was 772ec4a First commit B Switched to branch 'master' $ ls file1 file2 file3 file4 ``` 

All the files exist on the final commit, but the intermediate commits don't contain files from the other repo because the histories are unrelated.

Now if you do `git rebase master-holder`, or in the example here `git rebase other/master`, you'll end up with:
    
    
    A1--A2--B1'--B2'
    

and commits B1' and B2' with have all the files from A1 and A2, which I think is what you want. Note that this won't preserve a linear commit history across both repos since the rebase replays the changes of B1 and B2 and you end up with new commits, but it does end up in a more useful state for your case.

So to summarize: **you want to use`git rebase` instead of `git merge --allow-unrelated-histories`**  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[kslong](https://gist.github.com/kslong) ** commented Nov 10, 2019

That's more or less what I concluded as well. It's unfortunately not quite what I wanted, but that is what it is.  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[Ayushi-Rohela](https://gist.github.com/Ayushi-Rohela) ** commented Jan 3, 2020

[@msrose](https://github.com/msrose) I want to merge one particular branch say B1 from repository R1 to a branch B2 of repository R2, any ideas on this?  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[sayashraaj](https://gist.github.com/sayashraaj) ** commented Mar 17, 2020

Hi, will this remove contributions from deleted repo?  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[BenjaminTJohnson](https://gist.github.com/BenjaminTJohnson) ** commented Apr 24, 2020

I like this approach, but it doesn't work with bare repositories, failing at the merge portion.  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[Brian-Pho](https://gist.github.com/Brian-Pho) ** commented Jun 5, 2020

This is exactly what I needed and it worked perfectly. Thanks.  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[edazpotato](https://gist.github.com/edazpotato) ** commented Jul 8, 2020

Bro, you actually saved my life. Thank you so, so much!  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[sheldonhull](https://gist.github.com/sheldonhull) ** commented Jul 9, 2020

Super helpful. Much appreciated!  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[zyilmaz](https://gist.github.com/zyilmaz) ** commented Jul 10, 2020

It is really helpful. Thank you so much!  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[lesovsky](https://gist.github.com/lesovsky) ** commented Aug 9, 2020 •

edited 

When i do `git rm -rf *` I get `fatal: pathspec 'internal' did not match any files`.

Solved with removing all stuff using "rm -rf ..." and then removing from git using "git rm -rf *".  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[IamPhytan](https://gist.github.com/IamPhytan) ** commented Sep 25, 2020

[@untmdsprt](https://github.com/untmdsprt) If ever you want to add more complexity, submodules are the way to go  
  
---  
  
###  This comment has been minimized. 

[Sign in to view](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

Copy link  Quote reply 

###  **[sheldonhull](https://gist.github.com/sheldonhull) ** commented Sep 25, 2020

You are brave :-) I really really don't like dealing with submodules.  
I haven't tried subtrees yet but read about them recently and seem interesting to try out.  
  
---  
  
[Sign up for free](https://gist.github.com/join?source=comment-gist) **to join this conversation on GitHub**. Already have an account? [Sign in to comment](https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2Fmsrose%2F2feacb303035d11d2d05)

  * © 2021 GitHub, Inc.
  * [Terms](https://github.com/site/terms)
  * [Privacy](https://github.com/site/privacy)
  * [Security](https://github.com/security)
  * [Status](https://www.githubstatus.com/)
  * [Docs](https://docs.github.com)


  * [Contact GitHub](https://github.com/contact)
  * [Pricing](https://github.com/pricing)
  * [API](https://docs.github.com)
  * [Training](https://services.github.com)
  * [Blog](https://github.blog)
  * [About](https://github.com/about)



You can’t perform that action at this time. 

You signed in with another tab or window. [Reload]() to refresh your session. You signed out in another tab or window. [Reload]() to refresh your session.