# `dataDatabricksDatabaseInstance` Submodule <a name="`dataDatabricksDatabaseInstance` Submodule" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseInstance <a name="DataDatabricksDatabaseInstance" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance databricks_database_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstance(Construct Scope, string Id, DataDatabricksDatabaseInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig">DataDatabricksDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig">DataDatabricksDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksDatabaseInstanceProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDatabaseInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDatabaseInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDatabaseInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDatabaseInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDatabaseInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksDatabaseInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacity">Capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.childInstanceRefs">ChildInstanceRefs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList">DataDatabricksDatabaseInstanceChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList">DataDatabricksDatabaseInstanceCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCapacity">EffectiveCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCustomTags">EffectiveCustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList">DataDatabricksDatabaseInstanceEffectiveCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnablePgNativeLogin">EffectiveEnablePgNativeLogin</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnableReadableSecondaries">EffectiveEnableReadableSecondaries</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveNodeCount">EffectiveNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveRetentionWindowInDays">EffectiveRetentionWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveStopped">EffectiveStopped</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveUsagePolicyId">EffectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRef">ParentInstanceRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference">DataDatabricksDatabaseInstanceParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.pgVersion">PgVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference">DataDatabricksDatabaseInstanceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readOnlyDns">ReadOnlyDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readWriteDns">ReadWriteDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDays">RetentionWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stopped">Stopped</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacity"></a>

```csharp
public string Capacity { get; }
```

- *Type:* string

---

##### `ChildInstanceRefs`<sup>Required</sup> <a name="ChildInstanceRefs" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.childInstanceRefs"></a>

```csharp
public DataDatabricksDatabaseInstanceChildInstanceRefsList ChildInstanceRefs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList">DataDatabricksDatabaseInstanceChildInstanceRefsList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.customTags"></a>

```csharp
public DataDatabricksDatabaseInstanceCustomTagsList CustomTags { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList">DataDatabricksDatabaseInstanceCustomTagsList</a>

---

##### `EffectiveCapacity`<sup>Required</sup> <a name="EffectiveCapacity" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCapacity"></a>

```csharp
public string EffectiveCapacity { get; }
```

- *Type:* string

---

##### `EffectiveCustomTags`<sup>Required</sup> <a name="EffectiveCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCustomTags"></a>

```csharp
public DataDatabricksDatabaseInstanceEffectiveCustomTagsList EffectiveCustomTags { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList">DataDatabricksDatabaseInstanceEffectiveCustomTagsList</a>

---

##### `EffectiveEnablePgNativeLogin`<sup>Required</sup> <a name="EffectiveEnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnablePgNativeLogin"></a>

```csharp
public IResolvable EffectiveEnablePgNativeLogin { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EffectiveEnableReadableSecondaries`<sup>Required</sup> <a name="EffectiveEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnableReadableSecondaries"></a>

```csharp
public IResolvable EffectiveEnableReadableSecondaries { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EffectiveNodeCount`<sup>Required</sup> <a name="EffectiveNodeCount" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveNodeCount"></a>

```csharp
public double EffectiveNodeCount { get; }
```

- *Type:* double

---

##### `EffectiveRetentionWindowInDays`<sup>Required</sup> <a name="EffectiveRetentionWindowInDays" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveRetentionWindowInDays"></a>

```csharp
public double EffectiveRetentionWindowInDays { get; }
```

- *Type:* double

---

##### `EffectiveStopped`<sup>Required</sup> <a name="EffectiveStopped" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveStopped"></a>

```csharp
public IResolvable EffectiveStopped { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EffectiveUsagePolicyId`<sup>Required</sup> <a name="EffectiveUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveUsagePolicyId"></a>

```csharp
public string EffectiveUsagePolicyId { get; }
```

- *Type:* string

---

##### `EnablePgNativeLogin`<sup>Required</sup> <a name="EnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enablePgNativeLogin"></a>

```csharp
public IResolvable EnablePgNativeLogin { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondaries"></a>

```csharp
public IResolvable EnableReadableSecondaries { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `ParentInstanceRef`<sup>Required</sup> <a name="ParentInstanceRef" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRef"></a>

```csharp
public DataDatabricksDatabaseInstanceParentInstanceRefOutputReference ParentInstanceRef { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference">DataDatabricksDatabaseInstanceParentInstanceRefOutputReference</a>

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.pgVersion"></a>

```csharp
public string PgVersion { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.providerConfig"></a>

```csharp
public DataDatabricksDatabaseInstanceProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference">DataDatabricksDatabaseInstanceProviderConfigOutputReference</a>

---

##### `ReadOnlyDns`<sup>Required</sup> <a name="ReadOnlyDns" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readOnlyDns"></a>

```csharp
public string ReadOnlyDns { get; }
```

- *Type:* string

---

##### `ReadWriteDns`<sup>Required</sup> <a name="ReadWriteDns" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readWriteDns"></a>

```csharp
public string ReadWriteDns { get; }
```

- *Type:* string

---

##### `RetentionWindowInDays`<sup>Required</sup> <a name="RetentionWindowInDays" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDays"></a>

```csharp
public double RetentionWindowInDays { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Stopped`<sup>Required</sup> <a name="Stopped" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stopped"></a>

```csharp
public IResolvable Stopped { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstanceProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseInstanceChildInstanceRefs <a name="DataDatabricksDatabaseInstanceChildInstanceRefs" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceChildInstanceRefs {
    string BranchTime = null,
    string Lsn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.branchTime">BranchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.lsn">Lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.branchTime"></a>

```csharp
public string BranchTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.lsn"></a>

```csharp
public string Lsn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

### DataDatabricksDatabaseInstanceConfig <a name="DataDatabricksDatabaseInstanceConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksDatabaseInstanceProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#provider_config DataDatabricksDatabaseInstance#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.providerConfig"></a>

```csharp
public DataDatabricksDatabaseInstanceProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#provider_config DataDatabricksDatabaseInstance#provider_config}.

---

### DataDatabricksDatabaseInstanceCustomTags <a name="DataDatabricksDatabaseInstanceCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceCustomTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}.

---

### DataDatabricksDatabaseInstanceEffectiveCustomTags <a name="DataDatabricksDatabaseInstanceEffectiveCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceEffectiveCustomTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}.

---

### DataDatabricksDatabaseInstanceParentInstanceRef <a name="DataDatabricksDatabaseInstanceParentInstanceRef" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceParentInstanceRef {
    string BranchTime = null,
    string Lsn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.branchTime">BranchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.lsn">Lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.branchTime"></a>

```csharp
public string BranchTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.lsn"></a>

```csharp
public string Lsn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

### DataDatabricksDatabaseInstanceProviderConfig <a name="DataDatabricksDatabaseInstanceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#workspace_id DataDatabricksDatabaseInstance#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/database_instance#workspace_id DataDatabricksDatabaseInstance#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseInstanceChildInstanceRefsList <a name="DataDatabricksDatabaseInstanceChildInstanceRefsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceChildInstanceRefsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get"></a>

```csharp
private DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstanceChildInstanceRefs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>[]

---


### DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference <a name="DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime"></a>

```csharp
private void ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetLsn"></a>

```csharp
private void ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput">LsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTime">BranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsn">Lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```csharp
public string EffectiveLsn { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```csharp
public string BranchTimeInput { get; }
```

- *Type:* string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput"></a>

```csharp
public string LsnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTime"></a>

```csharp
public string BranchTime { get; }
```

- *Type:* string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsn"></a>

```csharp
public string Lsn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstanceChildInstanceRefs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>

---


### DataDatabricksDatabaseInstanceCustomTagsList <a name="DataDatabricksDatabaseInstanceCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceCustomTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get"></a>

```csharp
private DataDatabricksDatabaseInstanceCustomTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstanceCustomTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>[]

---


### DataDatabricksDatabaseInstanceCustomTagsOutputReference <a name="DataDatabricksDatabaseInstanceCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceCustomTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstanceCustomTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>

---


### DataDatabricksDatabaseInstanceEffectiveCustomTagsList <a name="DataDatabricksDatabaseInstanceEffectiveCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceEffectiveCustomTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get"></a>

```csharp
private DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstanceEffectiveCustomTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>[]

---


### DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference <a name="DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstanceEffectiveCustomTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>

---


### DataDatabricksDatabaseInstanceParentInstanceRefOutputReference <a name="DataDatabricksDatabaseInstanceParentInstanceRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceParentInstanceRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetBranchTime"></a>

```csharp
private void ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetLsn"></a>

```csharp
private void ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsnInput">LsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTime">BranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsn">Lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn"></a>

```csharp
public string EffectiveLsn { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput"></a>

```csharp
public string BranchTimeInput { get; }
```

- *Type:* string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsnInput"></a>

```csharp
public string LsnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTime"></a>

```csharp
public string BranchTime { get; }
```

- *Type:* string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsn"></a>

```csharp
public string Lsn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstanceParentInstanceRef InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a>

---


### DataDatabricksDatabaseInstanceProviderConfigOutputReference <a name="DataDatabricksDatabaseInstanceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDatabaseInstanceProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstanceProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a>

---



