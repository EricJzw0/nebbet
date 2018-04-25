# coding: utf-8

from django.db import models

class User(models.Model):
    username = models.CharField(max_length=255, verbose_name=u"账号")
    password = models.CharField(max_length=255, verbose_name=u"密码")
    private_key = models.CharField(max_length=255, verbose_name=u"私钥")

    def __unicode__(self):
        return self.username

    class Meta:
        verbose_name = u"用户"
        verbose_name_plural = u"用户"
