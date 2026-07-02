# `disableLegacyFeaturesSetting` Submodule <a name="`disableLegacyFeaturesSetting` Submodule" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyFeaturesSetting <a name="DisableLegacyFeaturesSetting" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting databricks_disable_legacy_features_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSetting;

DisableLegacyFeaturesSetting.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .disableLegacyFeatures(DisableLegacyFeaturesSettingDisableLegacyFeatures)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(DisableLegacyFeaturesSettingProviderConfig)
//  .settingName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.disableLegacyFeatures">disableLegacyFeatures</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | disable_legacy_features block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disableLegacyFeatures`<sup>Required</sup> <a name="disableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.disableLegacyFeatures"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

disable_legacy_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#disable_legacy_features DisableLegacyFeaturesSetting#disable_legacy_features}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#provider_config DisableLegacyFeaturesSetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.settingName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures">putDisableLegacyFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDisableLegacyFeatures` <a name="putDisableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures"></a>

```java
public void putDisableLegacyFeatures(DisableLegacyFeaturesSettingDisableLegacyFeatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig"></a>

```java
public void putProviderConfig(DisableLegacyFeaturesSettingProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetId"></a>

```java
public void resetId()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetSettingName"></a>

```java
public void resetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DisableLegacyFeaturesSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSetting;

DisableLegacyFeaturesSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSetting;

DisableLegacyFeaturesSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSetting;

DisableLegacyFeaturesSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSetting;

DisableLegacyFeaturesSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DisableLegacyFeaturesSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DisableLegacyFeaturesSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DisableLegacyFeaturesSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DisableLegacyFeaturesSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DisableLegacyFeaturesSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeatures">disableLegacyFeatures</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference">DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference">DisableLegacyFeaturesSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeaturesInput">disableLegacyFeaturesInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingNameInput">settingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingName">settingName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disableLegacyFeatures`<sup>Required</sup> <a name="disableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeatures"></a>

```java
public DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference getDisableLegacyFeatures();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference">DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfig"></a>

```java
public DisableLegacyFeaturesSettingProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference">DisableLegacyFeaturesSettingProviderConfigOutputReference</a>

---

##### `disableLegacyFeaturesInput`<sup>Optional</sup> <a name="disableLegacyFeaturesInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeaturesInput"></a>

```java
public DisableLegacyFeaturesSettingDisableLegacyFeatures getDisableLegacyFeaturesInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfigInput"></a>

```java
public DisableLegacyFeaturesSettingProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingNameInput"></a>

```java
public java.lang.String getSettingNameInput();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyFeaturesSettingConfig <a name="DisableLegacyFeaturesSettingConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSettingConfig;

DisableLegacyFeaturesSettingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .disableLegacyFeatures(DisableLegacyFeaturesSettingDisableLegacyFeatures)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(DisableLegacyFeaturesSettingProviderConfig)
//  .settingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.disableLegacyFeatures">disableLegacyFeatures</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | disable_legacy_features block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disableLegacyFeatures`<sup>Required</sup> <a name="disableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.disableLegacyFeatures"></a>

```java
public DisableLegacyFeaturesSettingDisableLegacyFeatures getDisableLegacyFeatures();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

disable_legacy_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#disable_legacy_features DisableLegacyFeaturesSetting#disable_legacy_features}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.providerConfig"></a>

```java
public DisableLegacyFeaturesSettingProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#provider_config DisableLegacyFeaturesSetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}.

---

### DisableLegacyFeaturesSettingDisableLegacyFeatures <a name="DisableLegacyFeaturesSettingDisableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSettingDisableLegacyFeatures;

DisableLegacyFeaturesSettingDisableLegacyFeatures.builder()
    .value(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.property.value">value</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}.

---

### DisableLegacyFeaturesSettingProviderConfig <a name="DisableLegacyFeaturesSettingProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSettingProviderConfig;

DisableLegacyFeaturesSettingProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#workspace_id DisableLegacyFeaturesSetting#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/disable_legacy_features_setting#workspace_id DisableLegacyFeaturesSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference <a name="DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference;

new DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.value">value</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.valueInput"></a>

```java
public java.lang.Boolean|IResolvable getValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.value"></a>

```java
public java.lang.Boolean|IResolvable getValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.internalValue"></a>

```java
public DisableLegacyFeaturesSettingDisableLegacyFeatures getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---


### DisableLegacyFeaturesSettingProviderConfigOutputReference <a name="DisableLegacyFeaturesSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.disable_legacy_features_setting.DisableLegacyFeaturesSettingProviderConfigOutputReference;

new DisableLegacyFeaturesSettingProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.internalValue"></a>

```java
public DisableLegacyFeaturesSettingProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---



