# `dataDatabricksLakewatchRule` Submodule <a name="`dataDatabricksLakewatchRule` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchRule <a name="DataDatabricksLakewatchRule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule databricks_lakewatch_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRule(Construct Scope, string Id, DataDatabricksLakewatchRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig">DataDatabricksLakewatchRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig">DataDatabricksLakewatchRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksLakewatchRuleProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksLakewatchRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.annotations">Annotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.batch">Batch</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference">DataDatabricksLakewatchRuleBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.computeWorkspaceId">ComputeWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.contentResourceId">ContentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference">DataDatabricksLakewatchRuleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.deduplication">Deduplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.deduplicationTimeWindow">DeduplicationTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveCatalogName">EffectiveCatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveRuleName">EffectiveRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveRunAsPrincipal">EffectiveRunAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveSchemaName">EffectiveSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.fidelity">Fidelity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.mitre">Mitre</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList">DataDatabricksLakewatchRuleMitreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.objective">Objective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.originalContentPack">OriginalContentPack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference">DataDatabricksLakewatchRuleOriginalContentPackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.output">Output</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference">DataDatabricksLakewatchRuleOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.owner">Owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference">DataDatabricksLakewatchRuleOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference">DataDatabricksLakewatchRuleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.references">References</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.runAsPrincipal">RunAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.runbook">Runbook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference">DataDatabricksLakewatchRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference">DataDatabricksLakewatchRuleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.suppressUntilTime">SuppressUntilTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.timerange">Timerange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference">DataDatabricksLakewatchRuleTimerangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference">DataDatabricksLakewatchRuleUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.annotations"></a>

```csharp
public StringMap Annotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Batch`<sup>Required</sup> <a name="Batch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.batch"></a>

```csharp
public DataDatabricksLakewatchRuleBatchOutputReference Batch { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference">DataDatabricksLakewatchRuleBatchOutputReference</a>

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `ComputeWorkspaceId`<sup>Required</sup> <a name="ComputeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.computeWorkspaceId"></a>

```csharp
public string ComputeWorkspaceId { get; }
```

- *Type:* string

---

##### `ContentResourceId`<sup>Required</sup> <a name="ContentResourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.contentResourceId"></a>

```csharp
public string ContentResourceId { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.createdBy"></a>

```csharp
public DataDatabricksLakewatchRuleCreatedByOutputReference CreatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference">DataDatabricksLakewatchRuleCreatedByOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Deduplication`<sup>Required</sup> <a name="Deduplication" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.deduplication"></a>

```csharp
public string Deduplication { get; }
```

- *Type:* string

---

##### `DeduplicationTimeWindow`<sup>Required</sup> <a name="DeduplicationTimeWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.deduplicationTimeWindow"></a>

```csharp
public string DeduplicationTimeWindow { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveCatalogName`<sup>Required</sup> <a name="EffectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveCatalogName"></a>

```csharp
public string EffectiveCatalogName { get; }
```

- *Type:* string

---

##### `EffectiveRuleName`<sup>Required</sup> <a name="EffectiveRuleName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveRuleName"></a>

```csharp
public string EffectiveRuleName { get; }
```

- *Type:* string

---

##### `EffectiveRunAsPrincipal`<sup>Required</sup> <a name="EffectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveRunAsPrincipal"></a>

```csharp
public string EffectiveRunAsPrincipal { get; }
```

- *Type:* string

---

##### `EffectiveSchemaName`<sup>Required</sup> <a name="EffectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveSchemaName"></a>

```csharp
public string EffectiveSchemaName { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Fidelity`<sup>Required</sup> <a name="Fidelity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.fidelity"></a>

```csharp
public string Fidelity { get; }
```

- *Type:* string

---

##### `Mitre`<sup>Required</sup> <a name="Mitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.mitre"></a>

```csharp
public DataDatabricksLakewatchRuleMitreList Mitre { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList">DataDatabricksLakewatchRuleMitreList</a>

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.objective"></a>

```csharp
public string Objective { get; }
```

- *Type:* string

---

##### `OriginalContentPack`<sup>Required</sup> <a name="OriginalContentPack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.originalContentPack"></a>

```csharp
public DataDatabricksLakewatchRuleOriginalContentPackOutputReference OriginalContentPack { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference">DataDatabricksLakewatchRuleOriginalContentPackOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.output"></a>

```csharp
public DataDatabricksLakewatchRuleOutputOutputReference Output { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference">DataDatabricksLakewatchRuleOutputOutputReference</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.owner"></a>

```csharp
public DataDatabricksLakewatchRuleOwnerOutputReference Owner { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference">DataDatabricksLakewatchRuleOwnerOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchRuleProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference">DataDatabricksLakewatchRuleProviderConfigOutputReference</a>

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.references"></a>

```csharp
public string[] References { get; }
```

- *Type:* string[]

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `RunAsPrincipal`<sup>Required</sup> <a name="RunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.runAsPrincipal"></a>

```csharp
public string RunAsPrincipal { get; }
```

- *Type:* string

---

##### `Runbook`<sup>Required</sup> <a name="Runbook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.runbook"></a>

```csharp
public string Runbook { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.schedule"></a>

```csharp
public DataDatabricksLakewatchRuleScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference">DataDatabricksLakewatchRuleScheduleOutputReference</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.status"></a>

```csharp
public DataDatabricksLakewatchRuleStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference">DataDatabricksLakewatchRuleStatusOutputReference</a>

---

##### `SuppressUntilTime`<sup>Required</sup> <a name="SuppressUntilTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.suppressUntilTime"></a>

```csharp
public string SuppressUntilTime { get; }
```

- *Type:* string

---

##### `Timerange`<sup>Required</sup> <a name="Timerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.timerange"></a>

```csharp
public DataDatabricksLakewatchRuleTimerangeOutputReference Timerange { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference">DataDatabricksLakewatchRuleTimerangeOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.updatedBy"></a>

```csharp
public DataDatabricksLakewatchRuleUpdatedByOutputReference UpdatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference">DataDatabricksLakewatchRuleUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchRuleBatch <a name="DataDatabricksLakewatchRuleBatch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleBatch {
    DataDatabricksLakewatchRuleBatchCustom Custom = null,
    DataDatabricksLakewatchRuleBatchSql Sql = null,
    string WarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#custom DataDatabricksLakewatchRule#custom}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.sql">Sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sql DataDatabricksLakewatchRule#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#warehouse_id DataDatabricksLakewatchRule#warehouse_id}. |

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.custom"></a>

```csharp
public DataDatabricksLakewatchRuleBatchCustom Custom { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#custom DataDatabricksLakewatchRule#custom}.

---

##### `Sql`<sup>Optional</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.sql"></a>

```csharp
public DataDatabricksLakewatchRuleBatchSql Sql { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sql DataDatabricksLakewatchRule#sql}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#warehouse_id DataDatabricksLakewatchRule#warehouse_id}.

---

### DataDatabricksLakewatchRuleBatchCustom <a name="DataDatabricksLakewatchRuleBatchCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleBatchCustom {
    string Notebook,
    System.Collections.Generic.IDictionary<string, string> Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.property.notebook">Notebook</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#notebook DataDatabricksLakewatchRule#notebook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#options DataDatabricksLakewatchRule#options}. |

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.property.notebook"></a>

```csharp
public string Notebook { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#notebook DataDatabricksLakewatchRule#notebook}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#options DataDatabricksLakewatchRule#options}.

---

### DataDatabricksLakewatchRuleBatchSql <a name="DataDatabricksLakewatchRuleBatchSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleBatchSql {
    string Query,
    string DefaultCatalogName = null,
    string DefaultSchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#query DataDatabricksLakewatchRule#query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.defaultCatalogName">DefaultCatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_catalog_name DataDatabricksLakewatchRule#default_catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.defaultSchemaName">DefaultSchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_schema_name DataDatabricksLakewatchRule#default_schema_name}. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#query DataDatabricksLakewatchRule#query}.

---

##### `DefaultCatalogName`<sup>Optional</sup> <a name="DefaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.defaultCatalogName"></a>

```csharp
public string DefaultCatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_catalog_name DataDatabricksLakewatchRule#default_catalog_name}.

---

##### `DefaultSchemaName`<sup>Optional</sup> <a name="DefaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.defaultSchemaName"></a>

```csharp
public string DefaultSchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_schema_name DataDatabricksLakewatchRule#default_schema_name}.

---

### DataDatabricksLakewatchRuleConfig <a name="DataDatabricksLakewatchRuleConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksLakewatchRuleProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#name DataDatabricksLakewatchRule#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#provider_config DataDatabricksLakewatchRule#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#name DataDatabricksLakewatchRule#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchRuleProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#provider_config DataDatabricksLakewatchRule#provider_config}.

---

### DataDatabricksLakewatchRuleCreatedBy <a name="DataDatabricksLakewatchRuleCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleCreatedBy {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}.

---

### DataDatabricksLakewatchRuleMitre <a name="DataDatabricksLakewatchRuleMitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleMitre {
    string SubTechnique = null,
    string SubTechniqueId = null,
    string Tactic = null,
    string Taxonomy = null,
    string Technique = null,
    string TechniqueId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.subTechnique">SubTechnique</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sub_technique DataDatabricksLakewatchRule#sub_technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.subTechniqueId">SubTechniqueId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sub_technique_id DataDatabricksLakewatchRule#sub_technique_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.tactic">Tactic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#tactic DataDatabricksLakewatchRule#tactic}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.taxonomy">Taxonomy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#taxonomy DataDatabricksLakewatchRule#taxonomy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.technique">Technique</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#technique DataDatabricksLakewatchRule#technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.techniqueId">TechniqueId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#technique_id DataDatabricksLakewatchRule#technique_id}. |

---

##### `SubTechnique`<sup>Optional</sup> <a name="SubTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.subTechnique"></a>

```csharp
public string SubTechnique { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sub_technique DataDatabricksLakewatchRule#sub_technique}.

---

##### `SubTechniqueId`<sup>Optional</sup> <a name="SubTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.subTechniqueId"></a>

```csharp
public string SubTechniqueId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sub_technique_id DataDatabricksLakewatchRule#sub_technique_id}.

---

##### `Tactic`<sup>Optional</sup> <a name="Tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.tactic"></a>

```csharp
public string Tactic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#tactic DataDatabricksLakewatchRule#tactic}.

---

##### `Taxonomy`<sup>Optional</sup> <a name="Taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.taxonomy"></a>

```csharp
public string Taxonomy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#taxonomy DataDatabricksLakewatchRule#taxonomy}.

---

##### `Technique`<sup>Optional</sup> <a name="Technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.technique"></a>

```csharp
public string Technique { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#technique DataDatabricksLakewatchRule#technique}.

---

##### `TechniqueId`<sup>Optional</sup> <a name="TechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.techniqueId"></a>

```csharp
public string TechniqueId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#technique_id DataDatabricksLakewatchRule#technique_id}.

---

### DataDatabricksLakewatchRuleOriginalContentPack <a name="DataDatabricksLakewatchRuleOriginalContentPack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleOriginalContentPack {

};
```


### DataDatabricksLakewatchRuleOutput <a name="DataDatabricksLakewatchRuleOutput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleOutput {
    System.Collections.Generic.IDictionary<string, string> Context = null,
    bool|IResolvable DefaultContext = null,
    string EventTimeColumn = null,
    string Summary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.context">Context</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#context DataDatabricksLakewatchRule#context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.defaultContext">DefaultContext</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_context DataDatabricksLakewatchRule#default_context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.eventTimeColumn">EventTimeColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#event_time_column DataDatabricksLakewatchRule#event_time_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.summary">Summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#summary DataDatabricksLakewatchRule#summary}. |

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.context"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Context { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#context DataDatabricksLakewatchRule#context}.

---

##### `DefaultContext`<sup>Optional</sup> <a name="DefaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.defaultContext"></a>

```csharp
public bool|IResolvable DefaultContext { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_context DataDatabricksLakewatchRule#default_context}.

---

##### `EventTimeColumn`<sup>Optional</sup> <a name="EventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.eventTimeColumn"></a>

```csharp
public string EventTimeColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#event_time_column DataDatabricksLakewatchRule#event_time_column}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.summary"></a>

```csharp
public string Summary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#summary DataDatabricksLakewatchRule#summary}.

---

### DataDatabricksLakewatchRuleOwner <a name="DataDatabricksLakewatchRuleOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleOwner {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}.

---

### DataDatabricksLakewatchRuleProviderConfig <a name="DataDatabricksLakewatchRuleProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#workspace_id DataDatabricksLakewatchRule#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#workspace_id DataDatabricksLakewatchRule#workspace_id}.

---

### DataDatabricksLakewatchRuleSchedule <a name="DataDatabricksLakewatchRuleSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleSchedule {
    string AtLeastEvery = null,
    bool|IResolvable Continuous = null,
    string CronExpression = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.atLeastEvery">AtLeastEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#at_least_every DataDatabricksLakewatchRule#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.continuous">Continuous</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#continuous DataDatabricksLakewatchRule#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#cron_expression DataDatabricksLakewatchRule#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#enabled DataDatabricksLakewatchRule#enabled}. |

---

##### `AtLeastEvery`<sup>Optional</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.atLeastEvery"></a>

```csharp
public string AtLeastEvery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#at_least_every DataDatabricksLakewatchRule#at_least_every}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.continuous"></a>

```csharp
public bool|IResolvable Continuous { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#continuous DataDatabricksLakewatchRule#continuous}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#cron_expression DataDatabricksLakewatchRule#cron_expression}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#enabled DataDatabricksLakewatchRule#enabled}.

---

### DataDatabricksLakewatchRuleStatus <a name="DataDatabricksLakewatchRuleStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleStatus {

};
```


### DataDatabricksLakewatchRuleTimerange <a name="DataDatabricksLakewatchRuleTimerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleTimerange {
    string ExtendLookback = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange.property.extendLookback">ExtendLookback</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#extend_lookback DataDatabricksLakewatchRule#extend_lookback}. |

---

##### `ExtendLookback`<sup>Optional</sup> <a name="ExtendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange.property.extendLookback"></a>

```csharp
public string ExtendLookback { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#extend_lookback DataDatabricksLakewatchRule#extend_lookback}.

---

### DataDatabricksLakewatchRuleUpdatedBy <a name="DataDatabricksLakewatchRuleUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleUpdatedBy {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchRuleBatchCustomOutputReference <a name="DataDatabricksLakewatchRuleBatchCustomOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleBatchCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.notebookInput">NotebookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.notebook">Notebook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.notebookInput"></a>

```csharp
public string NotebookInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.notebook"></a>

```csharp
public string Notebook { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleBatchCustom InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a>

---


### DataDatabricksLakewatchRuleBatchOutputReference <a name="DataDatabricksLakewatchRuleBatchOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleBatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putSql">PutSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetSql">ResetSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putCustom"></a>

```csharp
private void PutCustom(DataDatabricksLakewatchRuleBatchCustom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a>

---

##### `PutSql` <a name="PutSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putSql"></a>

```csharp
private void PutSql(DataDatabricksLakewatchRuleBatchSql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a>

---

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetSql` <a name="ResetSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetSql"></a>

```csharp
private void ResetSql()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetWarehouseId"></a>

```csharp
private void ResetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference">DataDatabricksLakewatchRuleBatchCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.sql">Sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference">DataDatabricksLakewatchRuleBatchSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.customInput">CustomInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.sqlInput">SqlInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch">DataDatabricksLakewatchRuleBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.custom"></a>

```csharp
public DataDatabricksLakewatchRuleBatchCustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference">DataDatabricksLakewatchRuleBatchCustomOutputReference</a>

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.sql"></a>

```csharp
public DataDatabricksLakewatchRuleBatchSqlOutputReference Sql { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference">DataDatabricksLakewatchRuleBatchSqlOutputReference</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.customInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleBatchCustom CustomInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.sqlInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleBatchSql SqlInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a>

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleBatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch">DataDatabricksLakewatchRuleBatch</a>

---


### DataDatabricksLakewatchRuleBatchSqlOutputReference <a name="DataDatabricksLakewatchRuleBatchSqlOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleBatchSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resetDefaultCatalogName">ResetDefaultCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resetDefaultSchemaName">ResetDefaultSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultCatalogName` <a name="ResetDefaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resetDefaultCatalogName"></a>

```csharp
private void ResetDefaultCatalogName()
```

##### `ResetDefaultSchemaName` <a name="ResetDefaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resetDefaultSchemaName"></a>

```csharp
private void ResetDefaultSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultCatalogNameInput">DefaultCatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultSchemaNameInput">DefaultSchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultCatalogName">DefaultCatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultSchemaName">DefaultSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultCatalogNameInput`<sup>Optional</sup> <a name="DefaultCatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultCatalogNameInput"></a>

```csharp
public string DefaultCatalogNameInput { get; }
```

- *Type:* string

---

##### `DefaultSchemaNameInput`<sup>Optional</sup> <a name="DefaultSchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultSchemaNameInput"></a>

```csharp
public string DefaultSchemaNameInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `DefaultCatalogName`<sup>Required</sup> <a name="DefaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultCatalogName"></a>

```csharp
public string DefaultCatalogName { get; }
```

- *Type:* string

---

##### `DefaultSchemaName`<sup>Required</sup> <a name="DefaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultSchemaName"></a>

```csharp
public string DefaultSchemaName { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleBatchSql InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a>

---


### DataDatabricksLakewatchRuleCreatedByOutputReference <a name="DataDatabricksLakewatchRuleCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy">DataDatabricksLakewatchRuleCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleCreatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy">DataDatabricksLakewatchRuleCreatedBy</a>

---


### DataDatabricksLakewatchRuleMitreList <a name="DataDatabricksLakewatchRuleMitreList" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleMitreList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.get"></a>

```csharp
private DataDatabricksLakewatchRuleMitreOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre">DataDatabricksLakewatchRuleMitre</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleMitre[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre">DataDatabricksLakewatchRuleMitre</a>[]

---


### DataDatabricksLakewatchRuleMitreOutputReference <a name="DataDatabricksLakewatchRuleMitreOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleMitreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetSubTechnique">ResetSubTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetSubTechniqueId">ResetSubTechniqueId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTactic">ResetTactic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTaxonomy">ResetTaxonomy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTechnique">ResetTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTechniqueId">ResetTechniqueId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubTechnique` <a name="ResetSubTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetSubTechnique"></a>

```csharp
private void ResetSubTechnique()
```

##### `ResetSubTechniqueId` <a name="ResetSubTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetSubTechniqueId"></a>

```csharp
private void ResetSubTechniqueId()
```

##### `ResetTactic` <a name="ResetTactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTactic"></a>

```csharp
private void ResetTactic()
```

##### `ResetTaxonomy` <a name="ResetTaxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTaxonomy"></a>

```csharp
private void ResetTaxonomy()
```

##### `ResetTechnique` <a name="ResetTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTechnique"></a>

```csharp
private void ResetTechnique()
```

##### `ResetTechniqueId` <a name="ResetTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTechniqueId"></a>

```csharp
private void ResetTechniqueId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueIdInput">SubTechniqueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueInput">SubTechniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.tacticInput">TacticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.taxonomyInput">TaxonomyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueIdInput">TechniqueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueInput">TechniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechnique">SubTechnique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueId">SubTechniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.tactic">Tactic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.taxonomy">Taxonomy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.technique">Technique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueId">TechniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre">DataDatabricksLakewatchRuleMitre</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubTechniqueIdInput`<sup>Optional</sup> <a name="SubTechniqueIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueIdInput"></a>

```csharp
public string SubTechniqueIdInput { get; }
```

- *Type:* string

---

##### `SubTechniqueInput`<sup>Optional</sup> <a name="SubTechniqueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueInput"></a>

```csharp
public string SubTechniqueInput { get; }
```

- *Type:* string

---

##### `TacticInput`<sup>Optional</sup> <a name="TacticInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.tacticInput"></a>

```csharp
public string TacticInput { get; }
```

- *Type:* string

---

##### `TaxonomyInput`<sup>Optional</sup> <a name="TaxonomyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.taxonomyInput"></a>

```csharp
public string TaxonomyInput { get; }
```

- *Type:* string

---

##### `TechniqueIdInput`<sup>Optional</sup> <a name="TechniqueIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueIdInput"></a>

```csharp
public string TechniqueIdInput { get; }
```

- *Type:* string

---

##### `TechniqueInput`<sup>Optional</sup> <a name="TechniqueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueInput"></a>

```csharp
public string TechniqueInput { get; }
```

- *Type:* string

---

##### `SubTechnique`<sup>Required</sup> <a name="SubTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechnique"></a>

```csharp
public string SubTechnique { get; }
```

- *Type:* string

---

##### `SubTechniqueId`<sup>Required</sup> <a name="SubTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueId"></a>

```csharp
public string SubTechniqueId { get; }
```

- *Type:* string

---

##### `Tactic`<sup>Required</sup> <a name="Tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.tactic"></a>

```csharp
public string Tactic { get; }
```

- *Type:* string

---

##### `Taxonomy`<sup>Required</sup> <a name="Taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.taxonomy"></a>

```csharp
public string Taxonomy { get; }
```

- *Type:* string

---

##### `Technique`<sup>Required</sup> <a name="Technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.technique"></a>

```csharp
public string Technique { get; }
```

- *Type:* string

---

##### `TechniqueId`<sup>Required</sup> <a name="TechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueId"></a>

```csharp
public string TechniqueId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleMitre InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre">DataDatabricksLakewatchRuleMitre</a>

---


### DataDatabricksLakewatchRuleOriginalContentPackOutputReference <a name="DataDatabricksLakewatchRuleOriginalContentPackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleOriginalContentPackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack">DataDatabricksLakewatchRuleOriginalContentPack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleOriginalContentPack InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack">DataDatabricksLakewatchRuleOriginalContentPack</a>

---


### DataDatabricksLakewatchRuleOutputOutputReference <a name="DataDatabricksLakewatchRuleOutputOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetDefaultContext">ResetDefaultContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetEventTimeColumn">ResetEventTimeColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetDefaultContext` <a name="ResetDefaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetDefaultContext"></a>

```csharp
private void ResetDefaultContext()
```

##### `ResetEventTimeColumn` <a name="ResetEventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetEventTimeColumn"></a>

```csharp
private void ResetEventTimeColumn()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetSummary"></a>

```csharp
private void ResetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.contextInput">ContextInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.defaultContextInput">DefaultContextInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.eventTimeColumnInput">EventTimeColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.summaryInput">SummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.context">Context</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.defaultContext">DefaultContext</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.eventTimeColumn">EventTimeColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput">DataDatabricksLakewatchRuleOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.contextInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ContextInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultContextInput`<sup>Optional</sup> <a name="DefaultContextInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.defaultContextInput"></a>

```csharp
public bool|IResolvable DefaultContextInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTimeColumnInput`<sup>Optional</sup> <a name="EventTimeColumnInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.eventTimeColumnInput"></a>

```csharp
public string EventTimeColumnInput { get; }
```

- *Type:* string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.summaryInput"></a>

```csharp
public string SummaryInput { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.context"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Context { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultContext`<sup>Required</sup> <a name="DefaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.defaultContext"></a>

```csharp
public bool|IResolvable DefaultContext { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventTimeColumn`<sup>Required</sup> <a name="EventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.eventTimeColumn"></a>

```csharp
public string EventTimeColumn { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput">DataDatabricksLakewatchRuleOutput</a>

---


### DataDatabricksLakewatchRuleOwnerOutputReference <a name="DataDatabricksLakewatchRuleOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleOwnerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner">DataDatabricksLakewatchRuleOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleOwner InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner">DataDatabricksLakewatchRuleOwner</a>

---


### DataDatabricksLakewatchRuleProviderConfigOutputReference <a name="DataDatabricksLakewatchRuleProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a>

---


### DataDatabricksLakewatchRuleScheduleOutputReference <a name="DataDatabricksLakewatchRuleScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetAtLeastEvery">ResetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtLeastEvery` <a name="ResetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetAtLeastEvery"></a>

```csharp
private void ResetAtLeastEvery()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetContinuous"></a>

```csharp
private void ResetContinuous()
```

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.atLeastEveryInput">AtLeastEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.atLeastEvery">AtLeastEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.continuous">Continuous</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule">DataDatabricksLakewatchRuleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AtLeastEveryInput`<sup>Optional</sup> <a name="AtLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.atLeastEveryInput"></a>

```csharp
public string AtLeastEveryInput { get; }
```

- *Type:* string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.continuousInput"></a>

```csharp
public bool|IResolvable ContinuousInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AtLeastEvery`<sup>Required</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.atLeastEvery"></a>

```csharp
public string AtLeastEvery { get; }
```

- *Type:* string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.continuous"></a>

```csharp
public bool|IResolvable Continuous { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule">DataDatabricksLakewatchRuleSchedule</a>

---


### DataDatabricksLakewatchRuleStatusOutputReference <a name="DataDatabricksLakewatchRuleStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastCompleteTime">LastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastErrorMessage">LastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastStartTime">LastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastStatusChangeTime">LastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.runState">RunState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus">DataDatabricksLakewatchRuleStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `LastCompleteTime`<sup>Required</sup> <a name="LastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastCompleteTime"></a>

```csharp
public string LastCompleteTime { get; }
```

- *Type:* string

---

##### `LastErrorMessage`<sup>Required</sup> <a name="LastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastErrorMessage"></a>

```csharp
public string LastErrorMessage { get; }
```

- *Type:* string

---

##### `LastStartTime`<sup>Required</sup> <a name="LastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastStartTime"></a>

```csharp
public string LastStartTime { get; }
```

- *Type:* string

---

##### `LastStatusChangeTime`<sup>Required</sup> <a name="LastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastStatusChangeTime"></a>

```csharp
public string LastStatusChangeTime { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `RunState`<sup>Required</sup> <a name="RunState" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.runState"></a>

```csharp
public string RunState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus">DataDatabricksLakewatchRuleStatus</a>

---


### DataDatabricksLakewatchRuleTimerangeOutputReference <a name="DataDatabricksLakewatchRuleTimerangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleTimerangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resetExtendLookback">ResetExtendLookback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtendLookback` <a name="ResetExtendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resetExtendLookback"></a>

```csharp
private void ResetExtendLookback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.extendLookbackInput">ExtendLookbackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.extendLookback">ExtendLookback</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange">DataDatabricksLakewatchRuleTimerange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtendLookbackInput`<sup>Optional</sup> <a name="ExtendLookbackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.extendLookbackInput"></a>

```csharp
public string ExtendLookbackInput { get; }
```

- *Type:* string

---

##### `ExtendLookback`<sup>Required</sup> <a name="ExtendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.extendLookback"></a>

```csharp
public string ExtendLookback { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleTimerange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange">DataDatabricksLakewatchRuleTimerange</a>

---


### DataDatabricksLakewatchRuleUpdatedByOutputReference <a name="DataDatabricksLakewatchRuleUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleUpdatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy">DataDatabricksLakewatchRuleUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleUpdatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy">DataDatabricksLakewatchRuleUpdatedBy</a>

---



