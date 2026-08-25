# `disableLegacyAccessSetting` Submodule <a name="`disableLegacyAccessSetting` Submodule" id="@cdktn/provider-databricks.disableLegacyAccessSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyAccessSetting <a name="DisableLegacyAccessSetting" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting databricks_disable_legacy_access_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSetting;

DisableLegacyAccessSetting.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .disableLegacyAccess(DisableLegacyAccessSettingDisableLegacyAccess)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(DisableLegacyAccessSettingProviderConfig)
//  .settingName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.disableLegacyAccess">disableLegacyAccess</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | disable_legacy_access block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#etag DisableLegacyAccessSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#id DisableLegacyAccessSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#setting_name DisableLegacyAccessSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disableLegacyAccess`<sup>Required</sup> <a name="disableLegacyAccess" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.disableLegacyAccess"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

disable_legacy_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#disable_legacy_access DisableLegacyAccessSetting#disable_legacy_access}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#etag DisableLegacyAccessSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#id DisableLegacyAccessSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#provider_config DisableLegacyAccessSetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.settingName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#setting_name DisableLegacyAccessSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess">putDisableLegacyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDisableLegacyAccess` <a name="putDisableLegacyAccess" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess"></a>

```java
public void putDisableLegacyAccess(DisableLegacyAccessSettingDisableLegacyAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putProviderConfig"></a>

```java
public void putProviderConfig(DisableLegacyAccessSettingProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetId"></a>

```java
public void resetId()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetSettingName"></a>

```java
public void resetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DisableLegacyAccessSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSetting;

DisableLegacyAccessSetting.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSetting;

DisableLegacyAccessSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSetting;

DisableLegacyAccessSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSetting;

DisableLegacyAccessSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DisableLegacyAccessSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DisableLegacyAccessSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DisableLegacyAccessSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DisableLegacyAccessSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DisableLegacyAccessSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccess">disableLegacyAccess</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference">DisableLegacyAccessSettingDisableLegacyAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference">DisableLegacyAccessSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccessInput">disableLegacyAccessInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingNameInput">settingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingName">settingName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disableLegacyAccess`<sup>Required</sup> <a name="disableLegacyAccess" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccess"></a>

```java
public DisableLegacyAccessSettingDisableLegacyAccessOutputReference getDisableLegacyAccess();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference">DisableLegacyAccessSettingDisableLegacyAccessOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.providerConfig"></a>

```java
public DisableLegacyAccessSettingProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference">DisableLegacyAccessSettingProviderConfigOutputReference</a>

---

##### `disableLegacyAccessInput`<sup>Optional</sup> <a name="disableLegacyAccessInput" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccessInput"></a>

```java
public DisableLegacyAccessSettingDisableLegacyAccess getDisableLegacyAccessInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.providerConfigInput"></a>

```java
public DisableLegacyAccessSettingProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingNameInput"></a>

```java
public java.lang.String getSettingNameInput();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyAccessSettingConfig <a name="DisableLegacyAccessSettingConfig" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSettingConfig;

DisableLegacyAccessSettingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .disableLegacyAccess(DisableLegacyAccessSettingDisableLegacyAccess)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(DisableLegacyAccessSettingProviderConfig)
//  .settingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.disableLegacyAccess">disableLegacyAccess</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | disable_legacy_access block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#etag DisableLegacyAccessSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#id DisableLegacyAccessSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#setting_name DisableLegacyAccessSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disableLegacyAccess`<sup>Required</sup> <a name="disableLegacyAccess" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.disableLegacyAccess"></a>

```java
public DisableLegacyAccessSettingDisableLegacyAccess getDisableLegacyAccess();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

disable_legacy_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#disable_legacy_access DisableLegacyAccessSetting#disable_legacy_access}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#etag DisableLegacyAccessSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#id DisableLegacyAccessSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.providerConfig"></a>

```java
public DisableLegacyAccessSettingProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#provider_config DisableLegacyAccessSetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#setting_name DisableLegacyAccessSetting#setting_name}.

---

### DisableLegacyAccessSettingDisableLegacyAccess <a name="DisableLegacyAccessSettingDisableLegacyAccess" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSettingDisableLegacyAccess;

DisableLegacyAccessSettingDisableLegacyAccess.builder()
    .value(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.property.value">value</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#value DisableLegacyAccessSetting#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#value DisableLegacyAccessSetting#value}.

---

### DisableLegacyAccessSettingProviderConfig <a name="DisableLegacyAccessSettingProviderConfig" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSettingProviderConfig;

DisableLegacyAccessSettingProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#workspace_id DisableLegacyAccessSetting#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/disable_legacy_access_setting#workspace_id DisableLegacyAccessSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyAccessSettingDisableLegacyAccessOutputReference <a name="DisableLegacyAccessSettingDisableLegacyAccessOutputReference" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference;

new DisableLegacyAccessSettingDisableLegacyAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.value">value</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.valueInput"></a>

```java
public java.lang.Boolean|IResolvable getValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.internalValue"></a>

```java
public DisableLegacyAccessSettingDisableLegacyAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---


### DisableLegacyAccessSettingProviderConfigOutputReference <a name="DisableLegacyAccessSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_access_setting.DisableLegacyAccessSettingProviderConfigOutputReference;

new DisableLegacyAccessSettingProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfigOutputReference.property.internalValue"></a>

```java
public DisableLegacyAccessSettingProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingProviderConfig">DisableLegacyAccessSettingProviderConfig</a>

---



