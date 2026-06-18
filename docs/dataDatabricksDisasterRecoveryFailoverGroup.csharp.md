# `dataDatabricksDisasterRecoveryFailoverGroup` Submodule <a name="`dataDatabricksDisasterRecoveryFailoverGroup` Submodule" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryFailoverGroup <a name="DataDatabricksDisasterRecoveryFailoverGroup" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group databricks_disaster_recovery_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroup(Construct Scope, string Id, DataDatabricksDisasterRecoveryFailoverGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig">DataDatabricksDisasterRecoveryFailoverGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig">DataDatabricksDisasterRecoveryFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDisasterRecoveryFailoverGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDisasterRecoveryFailoverGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDisasterRecoveryFailoverGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDisasterRecoveryFailoverGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDisasterRecoveryFailoverGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDisasterRecoveryFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.effectivePrimaryRegion">EffectivePrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.initialPrimaryRegion">InitialPrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.replicationPoint">ReplicationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.unityCatalogAssets">UnityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.workspaceSets">WorkspaceSets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectivePrimaryRegion`<sup>Required</sup> <a name="EffectivePrimaryRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.effectivePrimaryRegion"></a>

```csharp
public string EffectivePrimaryRegion { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `InitialPrimaryRegion`<sup>Required</sup> <a name="InitialPrimaryRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.initialPrimaryRegion"></a>

```csharp
public string InitialPrimaryRegion { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `ReplicationPoint`<sup>Required</sup> <a name="ReplicationPoint" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.replicationPoint"></a>

```csharp
public string ReplicationPoint { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UnityCatalogAssets`<sup>Required</sup> <a name="UnityCatalogAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.unityCatalogAssets"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference UnityCatalogAssets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkspaceSets`<sup>Required</sup> <a name="WorkspaceSets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.workspaceSets"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList WorkspaceSets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryFailoverGroupConfig <a name="DataDatabricksDisasterRecoveryFailoverGroupConfig" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets {
    IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] Catalogs,
    string DataReplicationWorkspaceSet,
    IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] LocationMappings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs">Catalogs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#catalogs DataDatabricksDisasterRecoveryFailoverGroup#catalogs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet">DataReplicationWorkspaceSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroup#data_replication_workspace_set}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings">LocationMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#location_mappings DataDatabricksDisasterRecoveryFailoverGroup#location_mappings}. |

---

##### `Catalogs`<sup>Required</sup> <a name="Catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] Catalogs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#catalogs DataDatabricksDisasterRecoveryFailoverGroup#catalogs}.

---

##### `DataReplicationWorkspaceSet`<sup>Required</sup> <a name="DataReplicationWorkspaceSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet"></a>

```csharp
public string DataReplicationWorkspaceSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroup#data_replication_workspace_set}.

---

##### `LocationMappings`<sup>Optional</sup> <a name="LocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] LocationMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#location_mappings DataDatabricksDisasterRecoveryFailoverGroup#location_mappings}.

---

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings {
    string Name,
    IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] UriByRegion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion">UriByRegion</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#uri_by_region DataDatabricksDisasterRecoveryFailoverGroup#uri_by_region}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

##### `UriByRegion`<sup>Required</sup> <a name="UriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] UriByRegion { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#uri_by_region DataDatabricksDisasterRecoveryFailoverGroup#uri_by_region}.

---

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion {
    string Region,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#region DataDatabricksDisasterRecoveryFailoverGroup#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#uri DataDatabricksDisasterRecoveryFailoverGroup#uri}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#region DataDatabricksDisasterRecoveryFailoverGroup#region}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#uri DataDatabricksDisasterRecoveryFailoverGroup#uri}.

---

### DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets <a name="DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets {
    string Name,
    bool|IResolvable ReplicateWorkspaceAssets,
    string[] WorkspaceIds,
    string[] StableUrlNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets">ReplicateWorkspaceAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroup#replicate_workspace_assets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds">WorkspaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#workspace_ids DataDatabricksDisasterRecoveryFailoverGroup#workspace_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames">StableUrlNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#stable_url_names DataDatabricksDisasterRecoveryFailoverGroup#stable_url_names}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

##### `ReplicateWorkspaceAssets`<sup>Required</sup> <a name="ReplicateWorkspaceAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets"></a>

```csharp
public bool|IResolvable ReplicateWorkspaceAssets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroup#replicate_workspace_assets}.

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds"></a>

```csharp
public string[] WorkspaceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#workspace_ids DataDatabricksDisasterRecoveryFailoverGroup#workspace_ids}.

---

##### `StableUrlNames`<sup>Optional</sup> <a name="StableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames"></a>

```csharp
public string[] StableUrlNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/disaster_recovery_failover_group#stable_url_names DataDatabricksDisasterRecoveryFailoverGroup#stable_url_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get"></a>

```csharp
private DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get"></a>

```csharp
private DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion">PutUriByRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUriByRegion` <a name="PutUriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion"></a>

```csharp
private void PutUriByRegion(IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion">UriByRegion</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput">UriByRegionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriByRegion`<sup>Required</sup> <a name="UriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList UriByRegion { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UriByRegionInput`<sup>Optional</sup> <a name="UriByRegionInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] UriByRegionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get"></a>

```csharp
private DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs">PutCatalogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings">PutLocationMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings">ResetLocationMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalogs` <a name="PutCatalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs"></a>

```csharp
private void PutCatalogs(IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---

##### `PutLocationMappings` <a name="PutLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings"></a>

```csharp
private void PutLocationMappings(IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---

##### `ResetLocationMappings` <a name="ResetLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings"></a>

```csharp
private void ResetLocationMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs">Catalogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings">LocationMappings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput">CatalogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput">DataReplicationWorkspaceSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput">LocationMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet">DataReplicationWorkspaceSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalogs`<sup>Required</sup> <a name="Catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList Catalogs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a>

---

##### `LocationMappings`<sup>Required</sup> <a name="LocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList LocationMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a>

---

##### `CatalogsInput`<sup>Optional</sup> <a name="CatalogsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] CatalogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---

##### `DataReplicationWorkspaceSetInput`<sup>Optional</sup> <a name="DataReplicationWorkspaceSetInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput"></a>

```csharp
public string DataReplicationWorkspaceSetInput { get; }
```

- *Type:* string

---

##### `LocationMappingsInput`<sup>Optional</sup> <a name="LocationMappingsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] LocationMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---

##### `DataReplicationWorkspaceSet`<sup>Required</sup> <a name="DataReplicationWorkspaceSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet"></a>

```csharp
public string DataReplicationWorkspaceSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList <a name="DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.get"></a>

```csharp
private DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets</a>[]

---


### DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames">ResetStableUrlNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStableUrlNames` <a name="ResetStableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames"></a>

```csharp
private void ResetStableUrlNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput">ReplicateWorkspaceAssetsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput">StableUrlNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput">WorkspaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets">ReplicateWorkspaceAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames">StableUrlNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds">WorkspaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicateWorkspaceAssetsInput`<sup>Optional</sup> <a name="ReplicateWorkspaceAssetsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput"></a>

```csharp
public bool|IResolvable ReplicateWorkspaceAssetsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StableUrlNamesInput`<sup>Optional</sup> <a name="StableUrlNamesInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput"></a>

```csharp
public string[] StableUrlNamesInput { get; }
```

- *Type:* string[]

---

##### `WorkspaceIdsInput`<sup>Optional</sup> <a name="WorkspaceIdsInput" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput"></a>

```csharp
public string[] WorkspaceIdsInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplicateWorkspaceAssets`<sup>Required</sup> <a name="ReplicateWorkspaceAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets"></a>

```csharp
public bool|IResolvable ReplicateWorkspaceAssets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StableUrlNames`<sup>Required</sup> <a name="StableUrlNames" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames"></a>

```csharp
public string[] StableUrlNames { get; }
```

- *Type:* string[]

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds"></a>

```csharp
public string[] WorkspaceIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets</a>

---



